import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Title from "@/src/components/Title";
import { FaBars } from 'react-icons/fa';
import "./index.scss";

export const Menu = ({ className, children, ...otherProps }) => {
  const [open, setOpen] = useState(false);

  const MenuMobile = open && (
    <nav className="menu-mobile">
      <Title>Menu</Title>
      {children}
    </nav>
  );

  return (
    <>
      <div className={classNames("menu", className)} {...otherProps}>
        <div className="menu-content">
          {children}
        </div>
        <i onClick={() => setOpen(!open)} className="menu-icon">
          <FaBars />
        </i>
      </div>
      {MenuMobile}
    </>
  )
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Menu.defaultProps = {
  className: "",
  children: null,
};

export default Menu;
