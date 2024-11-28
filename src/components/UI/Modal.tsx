import { createPortal } from "react-dom";
import React from "react";

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const ModalOverlay = () => {};

const portal = document.getElementById("overlays");
const Modal = () => {
  return <>{createPortal(<ModalOverlay></ModalOverlay>, portal)}</>;
};

export default Modal;
