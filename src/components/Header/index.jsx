import React, { useState } from "react";
import Menu from "@/src/components/Menu";
import Logo from "@/src/components/Logo";
import "./index.css";

const Header = () => (
  <div className="header">
    <Logo />
    <Menu />
  </div>
);

export default Header;
