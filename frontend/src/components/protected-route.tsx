"use client";

import { ReactNode } from "react";
import {
  MsalAuthenticationTemplate,
  MsalAuthenticationResult,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "@/config/auth-config";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: "3px solid rgba(15, 61, 46, 0.1)",
          borderTopColor: "#1F7A5C",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p style={{ color: "rgba(26, 46, 42, 0.4)", fontSize: "15px" }}>
        Signing in...
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function ErrorComponent({ error }: MsalAuthenticationResult) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "12px",
        padding: "0 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "22px",
          color: "#1A2E2A",
        }}
      >
        Unable to sign in
      </p>
      <p style={{ color: "rgba(26, 46, 42, 0.4)", fontSize: "15px" }}>
        {error?.message ?? "An unexpected error occurred. Please try again."}
      </p>
    </div>
  );
}

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={loginRequest}
      loadingComponent={Loading}
      errorComponent={ErrorComponent}
    >
      {children}
    </MsalAuthenticationTemplate>
  );
}
