import React, { useState, useMemo } from "react";
import Link from "@/src/components/Link";
import { useHistory } from "react-router";
import { FaBars } from 'react-icons/fa';
import "./index.css";

export const Menu = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const Links = (
    <>
      <Link>
        Home
      </Link>
      <Link>
        About
      </Link>
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
