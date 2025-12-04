import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Text = ({ className, children, ...otherProps }) => (
  <p className={classNames("text", className)} {...otherProps}>{children}</p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  children: null
};

export default Text;
