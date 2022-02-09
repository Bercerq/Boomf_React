import React from "react";

import { selectOption } from "../../../utils/functions/Panel";

import { panelData } from "../../../utils/constants/PanelData";

import Logo from "../../../utils/assets/svg/Logo.svg";

import { PanelContainer, Option, OptionIcon, OptionText } from "./style";

function PanelOptions({ options, setOpenSideBar }) {
  return (
    <PanelContainer>
      <img src={Logo} alt="Logo" />
      {options.map((option) =>
        panelData.map(({ Icon, text, flag }) => {
          switch (flag) {
            case option:
              return (
                <Option onClick={selectOption(text, setOpenSideBar)} key={flag}>
                  <OptionIcon>
                    <img src={Icon} alt={text} />
                  </OptionIcon>
                  <OptionText>{text}</OptionText>
                </Option>
              );
            default:
              break;
          }
        })
      )}
    </PanelContainer>
  );
}

export default PanelOptions;
