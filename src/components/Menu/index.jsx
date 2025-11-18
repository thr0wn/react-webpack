import React, { useState, useMemo } from "react";
import { useHistory } from "react-router";
import { FaBars } from 'react-icons/fa';
import "./index.css";

export const Menu = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const Links = (
    <>
      <a className="link">
        <p className="text">
          Home
        </p>
      </a>
      <a className="link">
        <p className="text">

          About
        </p>
      </a>
    </>
  );

  const MenuMobile = open && (
    <nav className="menu-mobile">
      {Links}
    </nav>
  );

  return (
    <>
      <div className="menu">
        {Links}
        <i onClick={() => setOpen(!open)} className="menu-icon">
          <FaBars />
        </i>
      </div>
      {MenuMobile}
    </>
  )
};

export default Menu;
