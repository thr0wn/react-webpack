import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

const Tag = ({ className, children, ...otherProps }) => (
  <p className={classNames("tag", className)} {...otherProps}>{children}</p>
);

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tag.defaultProps = {
  className: "",
  children: null
};

export default Tag;
