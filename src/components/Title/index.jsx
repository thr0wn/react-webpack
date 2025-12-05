import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

const Title = ({ className, children, ...otherProps }) => (
  <h1 className={classNames("title", className)} {...otherProps}>{children}</h1>
);

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Title.defaultProps = {
  className: "",
  children: null
};

export default Title;
