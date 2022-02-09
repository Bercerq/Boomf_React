import React, { useState } from "react";

import { drawOption } from "../../../utils/functions/Panel";

import Confetti from "./../Confetti/Confetti";
import PanelOptions from "./Panel_Options";
import SideBar from "../../SideBar/SideBar";

import { MainWrapper } from "./style";

function Panel({ children, setSelectConfetti, selectConfetti }) {
  const [openSideBar, setOpenSideBar] = useState({ title: "", state: false });

  return (
    <MainWrapper>
      <PanelOptions
        setOpenSideBar={setOpenSideBar}
        options={["text", "photo", "sticker", "chouse"]}
      />
      {children}
      <Confetti
        selectConfetti={selectConfetti}
        setSelectConfetti={setSelectConfetti}
      />
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}>
        {drawOption(openSideBar.title)}
      </SideBar>
    </MainWrapper>
  );
}

export default Panel;
