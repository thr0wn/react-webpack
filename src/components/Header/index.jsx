import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Header = ({ className, children, ...otherProps }) => (
  <div className={classNames("header", className)} {...otherProps}>{children}</div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  children: null
};

export default Header;

