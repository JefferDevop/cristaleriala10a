import React from "react";
import { useAuth } from "@/hooks";

import { LoginFormClient } from "../../components";


export default function Login() {
  const { user } = useAuth();

  if (user) {
    window.location.replace("/");
    return null;
  }
  return (
    <>
      <LoginFormClient />
    </>
  );
}
