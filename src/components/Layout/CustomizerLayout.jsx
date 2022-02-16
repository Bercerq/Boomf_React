import React from "react";

import { MainWrapper } from "../Sidebar/style";
import TextEditor from "../TextEditor/TextEditor";
import Confetti from "../Confetti/Confetti";
import Sidebar from "../Sidebar/Sidebar";

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
