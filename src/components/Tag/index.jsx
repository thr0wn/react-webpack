import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Tag = ({ className, children, ...otherProps }) => (
  <p className={classNames("tag", className)} {...otherProps}>{children}</p>
);

Tag.propTypes = {
  children: PropTypes.node,
};

Tag.defaultProps = {
  children: null
};

export default Tag;
