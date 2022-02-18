import React from "react";

import TextEditor from "../TextEditor/TextEditor";
import Confetti from "../Confetti/Confetti";
import { MainWrapper } from "./style";
import Sidebar from "../SideBar/SideBar";

function CustomizerLayout({ title, children, сonfettiData }) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <Sidebar/>
      {children}
      <Confetti сonfettiData={сonfettiData} />
      <TextEditor />
    </MainWrapper>
  );
}

export default CustomizerLayout;
