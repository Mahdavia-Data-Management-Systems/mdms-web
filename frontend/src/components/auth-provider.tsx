"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  PublicClientApplication,
  EventType,
  AuthenticationResult,
} from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "@/config/auth-config";

const msalInstance = new PublicClientApplication(msalConfig);
const msalInitPromise = msalInstance.initialize();

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    msalInitPromise.then(() => {
      // Fall back to any cached account
      if (
        !msalInstance.getActiveAccount() &&
        msalInstance.getAllAccounts().length > 0
      ) {
        msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
      }

      // Listen for future login successes
      msalInstance.addEventCallback((event) => {
        if (
          event.eventType === EventType.LOGIN_SUCCESS &&
          event.payload
        ) {
          const result = event.payload as AuthenticationResult;
          msalInstance.setActiveAccount(result.account);
        }
      });

      // Strip OIDC state param from URL after logout redirect
      if (window.location.search.includes("state=")) {
        window.history.replaceState({}, "", window.location.pathname);
      }

      setIsReady(true);
    });
  }, []);

  if (!isReady) return null;

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
