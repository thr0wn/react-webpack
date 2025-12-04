import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Button = ({ className, children, ...otherProps }) => (
  <button className={classNames("button", className)} {...otherProps}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  children: null
};

export default Button;
