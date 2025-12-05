import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

const Text = ({ className, children, ...otherProps }) => (
  <p className={classNames("text", className)} {...otherProps}>{children}</p>
);

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  className: "",
  children: null
};

export default Text;
