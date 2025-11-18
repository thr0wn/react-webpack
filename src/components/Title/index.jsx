import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.css";

const Title = ({ className, children, ...otherProps }) => (
  <h1 className={classNames("title", className)} {...otherProps}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.node,
};

Title.defaultProps = {
  children: null
};

export default Title;
