import React, { useState } from "react";

import SideBar from "../SideBar/SideBar";

import { MainWrapper } from "../Customiser_Panel/style";
import TextEditor from "../TextEditor/TextEditor";
import PanelOptions from "../Customiser_Panel/Panel_Options";
import Confetti from "../Confetti/Confetti";
import { drawOption } from "../../utils/functions/Panel";
function CustomizerLayout({ title, children, confettiState, ConfettiData }) {
  const [openSideBar, setOpenSideBar] = useState({ title: "", state: false });

  return (
    <MainWrapper>
      <title>{title}</title>
      <PanelOptions
        setOpenSideBar={setOpenSideBar}
        options={["text", "photo", "sticker", "chouse"]}
      />
      {children}
      <Confetti ConfettiData={ConfettiData} confettiState={confettiState} />
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}>
        {drawOption(openSideBar.title)}
      </SideBar>
      <TextEditor />
    </MainWrapper>
  );
}

export default CustomizerLayout;
