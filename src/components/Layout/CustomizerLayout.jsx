import React from "react";

import TextEditor from "../TextEditor/TextEditor";
import Confetti from "../Confetti/Confetti";
import {MainWrapper} from "./style";
import Sidebar from "../SideBar/SideBar";

function CustomizerLayout({title, children, dataName}) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <Sidebar/>
      {children}
      {dataName === 'boomb' && (
        <>
          <Confetti/>
          <TextEditor/>
        </>
      )}
    </MainWrapper>
  );
}

export default CustomizerLayout;
