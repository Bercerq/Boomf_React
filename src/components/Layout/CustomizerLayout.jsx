import React from "react";

import TextEditor from "../TextEditor/TextEditor";
import Confetti from "../Confetti/Confetti";
import Sidebar from "../SideBar/SideBar";

import { MainWrapper } from "./style";

function CustomizerLayout({ title, children, сonfettiData }) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <Sidebar />
      {children}
      <Confetti сonfettiData={сonfettiData} />
      <TextEditor />
    </MainWrapper>
  );
}

export default CustomizerLayout;
