import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaRegWindowClose } from "react-icons/fa";
import "./index.scss";

const Modal = ({ open, onClose, className, children, ...otherProps }) => {
  return open && createPortal(
    <>
      <div className="modal-blur" />
      <article className={classNames("modal", className, { "is-open": open })} {...otherProps}>
        <FaRegWindowClose onClick={onClose} className="modal-icon-close" />
        {children}
      </article>
    </>, document.body
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

Modal.defaultProps = {
  className: "",
  children: null
};

export default Modal;
