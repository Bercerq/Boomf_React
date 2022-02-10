import React, { useState } from "react";

import { drawOption } from "../../utils/functions/panel";

import SideBar from "../SideBar/SideBar";

import { MainWrapper } from "../Customiser_Panel/style";
import TextEditor from "../TextEditor/TextEditor";
import PanelOptions from "../Customiser_Panel/Panel_Options";
import Confetti from "../Confetti/Confetti";
function CustomizerLayout({
  children,
  setSelectConfetti,
  selectConfetti,
  openTextEditor,
  setOpenTextEditor,
}) {
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
      <TextEditor
        setOpenTextEditor={setOpenTextEditor}
        openTextEditor={openTextEditor}
      />
    </MainWrapper>
  );
}

export default CustomizerLayout;
