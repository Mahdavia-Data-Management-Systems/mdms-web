"use client";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "@/config/auth-config";

interface AuthButtonProps {
  className?: string;
}

export default function AuthButton({ className }: AuthButtonProps) {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    if (inProgress !== InteractionStatus.None) return;
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
    if (inProgress !== InteractionStatus.None) return;
    instance.logoutRedirect();
  };

  if (isAuthenticated) {
    return (
      <button className={className} onClick={handleLogout}>
        Sign Out
      </button>
    );
  }

  return (
    <button
      className={className}
      onClick={handleLogin}
      disabled={inProgress !== InteractionStatus.None}
    >
      Sign In
    </button>
  );
}
