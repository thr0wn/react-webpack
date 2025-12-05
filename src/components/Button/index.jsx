import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

const Button = ({ className, children, ...otherProps }) => (
  <button className={classNames("button", className)} {...otherProps}>{children}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: "",
  children: null
};

export default Button;
