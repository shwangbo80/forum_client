import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./login.css";

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const RenderLoginButton = () => {
    if (!user) {
      return "Log in";
    }
  };

  return (
    <div
      className="loginButton me-2"
      onClick={() => {
        loginWithRedirect();
      }}
    >
      <RenderLoginButton />
    </div>
  );
};

export default LoginButton;
