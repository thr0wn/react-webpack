import React, { useState } from "react";
import Menu from "@/src/components/Menu";
import logo from "@/public/images/logo.svg";
import "./index.css";

const Header = () => (
  <div className="header">
    <img src={logo} alt="" />
    <Menu />
  </div>
);

export default Header;
