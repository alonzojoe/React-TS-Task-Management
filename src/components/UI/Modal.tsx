import { createPortal } from "react-dom";
import React from "react";

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return <div className="backdrop">{children}</div>;
};

const portal = document.getElementById("overlays");
const Modal = ({ children }: { children: React.ReactNode }) => {
  if (!portal) return null;
  return <>{createPortal(<Backdrop>{children}</Backdrop>, portal)}</>;
};

export default Modal;
