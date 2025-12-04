import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Link = ({ className, children, ...otherProps }) => (
  <a className={classNames("link", className)} {...otherProps}>{children}</a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  children: null
};

export default Link;
