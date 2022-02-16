import React from "react";

import { MainWrapper } from "../Sidebar/style";
import TextEditor from "../TextEditor/TextEditor";
import SideBar from "../Sidebar/Sidebar";
import Confetti from "../Confetti/Confetti";

function CustomizerLayout({ title, children, сonfettiData }) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <SideBar />
      {children}
      <Confetti сonfettiData={сonfettiData} />
      <TextEditor />
    </MainWrapper>
  );
}

export default CustomizerLayout;
