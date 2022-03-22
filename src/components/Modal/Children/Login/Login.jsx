import React from "react";

import { LoginWindow, LoginDescription } from "../style";
import LoginForm from "./LoginForm";
import LoginFromSocial from "./LoginFromSocial";
function Login() {
  return (
    <LoginWindow>
      <LoginDescription>
        Log in to your account to access your proviously uploaded photos.
      </LoginDescription>
      <LoginForm />
      <LoginFromSocial />
    </LoginWindow>
  );
}

export default Login;
