import React from "react";
import { dataLogin } from "../../utils/globals";

export const handleLogout = () => {
  if (dataLogin && dataLogin.user.role === "admin") {
    window.localStorage.removeItem("dataLogin");

    window.location.href = "/imcoolmaster/";
  }
};
