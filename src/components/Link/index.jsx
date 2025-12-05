import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

const Link = ({ className, children, ...otherProps }) => (
  <p className={classNames("link", className)} {...otherProps}>{children}</p>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: "",
  children: null
};

export default Link;
