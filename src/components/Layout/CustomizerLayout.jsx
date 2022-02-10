import React, { useState } from "react";

import { drawOption } from "../../utils/functions/Panel";

import Confetti from "../Customizer/Confetti/Confetti";
import PanelOptions from "../Customizer/Customiser_Panel/Panel_Options";
import SideBar from "../SideBar/SideBar";

import { MainWrapper } from "../Customizer/Customiser_Panel/style";
import TextEditor from "../TextEditor/TextEditor";

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
