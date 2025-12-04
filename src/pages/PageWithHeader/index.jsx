import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "@/src/components/Logo";
import Header from "@/src/components/Header";
import Menu from "@/src/components/Menu";
import Link from "@/src/components/Link";
import Page from "@/src/pages/Page";
import "./index.css";

const PageWithHeader = ({ children, className, ...otherProps }) => (
  <Page className={classNames("page-with-header", className)}
    header={(
      <Header
        left={
          (<Logo />)
        }
        right={(
          <Menu>
            <ReactRouterLink to="/home">
              <Link>
                Home
              </Link>
            </ReactRouterLink>
            <ReactRouterLink to="/about">
              <Link>
                About
              </Link>
            </ReactRouterLink>
          </Menu>
        )}
      />)} {...otherProps}> {children}</Page>
);

PageWithHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageWithHeader.defaultProps = {
  className: "",
  children: null
};

export default PageWithHeader;
