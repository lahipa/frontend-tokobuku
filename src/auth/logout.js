import React from "react";
import { dataLogin } from "../utils/globals";

export const handleLogout = () => {
  if (dataLogin) {
    window.localStorage.removeItem("dataLogin");

    window.location.href = "/";
  }
};
