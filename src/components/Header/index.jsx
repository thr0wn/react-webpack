import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Header = ({ className, left, right, ...otherProps }) => (
  <div className={classNames("header", className)} {...otherProps}>
    <div className="header-left">
      {left}
    </div>
    <div className="header-right">
      {right}
    </div>
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

Header.defaultProps = {
  className: "",
  children: null
};

export default Header;

