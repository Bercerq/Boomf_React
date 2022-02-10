import React from "react";

import { findPanelOption } from "../../utils/functions/panel";

import Logo from "../../utils/assets/svg/Logo.svg";

import { PanelContainer, LogoIcon } from "./style";

function PanelOptions({ options, setOpenSideBar }) {
  return (
    <PanelContainer>
      <LogoIcon src={Logo} alt="Logo" />
      {findPanelOption(options, setOpenSideBar)}
    </PanelContainer>
  );
}

export default PanelOptions;
