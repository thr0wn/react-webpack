import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

const Page = ({ children, header, className, ...otherProps }) => (
  <article className={classNames("page", className)} {...otherProps}>
    {header}
    <article className="page-content">
      {children}
    </article>
  </article>
);

Page.propTypes = {
  className: PropTypes.string,
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  className: "",
  header: null,
  children: null
};

export default Page;
