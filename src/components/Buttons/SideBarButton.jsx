import React from "react";
import { SideBarBtn } from "./style";

function SideBarButton({ handleButtonClick, children }) {
  return <SideBarBtn onClick={handleButtonClick}>{children}</SideBarBtn>;
}

export default SideBarButton;
