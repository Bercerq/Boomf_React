import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { drawOption, findPanelOption } from "../../utils/functions/Panel";

import Logo from "../../utils/assets/svg/Logo.svg";

import { PanelContainer, LogoIcon } from "./style";
import SideBarOpen from "./SidebarOpen";

function Sidebar() {
  const { currentSidebar } = useSelector(
    ({ sidebarReducer }) => sidebarReducer
  );
  const dispatch = useDispatch();
  return (
    <>
      <PanelContainer>
        <LogoIcon src={Logo} alt="Logo" />
        {findPanelOption(dispatch)}
      </PanelContainer>
      <SideBarOpen currentSidebar={currentSidebar}>
        {drawOption(currentSidebar.flag)}
      </SideBarOpen>
    </>
  );
}

export default Sidebar;
