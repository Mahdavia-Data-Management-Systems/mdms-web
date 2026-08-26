"use client";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "@/config/auth-config";

interface AuthButtonProps {
  className?: string;
}

export default function AuthButton({ className }: AuthButtonProps) {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
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
    <button className={className} onClick={handleLogin}>
      Sign In
    </button>
  );
}
