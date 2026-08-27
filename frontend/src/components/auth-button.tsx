"use client";

import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "@/config/auth-config";

interface AuthButtonProps {
  className?: string;
}

export default function AuthButton({ className }: AuthButtonProps) {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <>
      <AuthenticatedTemplate>
        <button className={className} onClick={handleLogout}>
          Sign Out
        </button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button className={className} onClick={handleLogin}>
          Sign In
        </button>
      </UnauthenticatedTemplate>
    </>
  );
}
