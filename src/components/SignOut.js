import React from "react";
import { LogOut } from "../components/CustomStyles/index";

const SignOut = () => {
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
  };
  return <LogOut onClick={handleLogOut}>Log Out</LogOut>;
};

export default SignOut;
