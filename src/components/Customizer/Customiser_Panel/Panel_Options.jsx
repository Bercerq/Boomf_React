import React from "react";

import { findPanelOption } from "../../../utils/functions/Panel";

import Logo from "../../../utils/assets/svg/Logo.svg";

import { PanelContainer} from "./style";

function PanelOptions({ options, setOpenSideBar }) {
  return (
    <PanelContainer>
      <img src={Logo} alt="Logo" />
      {findPanelOption(options, setOpenSideBar)}
    </PanelContainer>
  );
}

export default PanelOptions;
