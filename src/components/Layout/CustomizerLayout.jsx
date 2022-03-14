import React from "react";

import TextEditor from "../TextEditor/TextEditor";
import Confetti from "../Confetti/Confetti";
import {MainWrapper} from "./style";
import Sidebar from "../SideBar/SideBar";
import CannonRightColumn from "../Confetti/Cannon";
import TextEditorCannon from "../TextEditor/TextEditorCannon";
import StandardRightColumn from "../Confetti/Standard";

function CustomizerLayout({title, children, dataName}) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <Sidebar/>
      {children}
      {dataName === 'cannon' && (
        <>
          <CannonRightColumn/>
        </>
      )}
      {dataName === 'boomb' && (
        <>
          <Confetti/>
          <TextEditor/>
        </>
      )}
      {dataName === 'Front' && (
        <>
          <StandardRightColumn/>
        </>
      )}
      {dataName === 'Inside' && (
        <>
          <TextEditorCannon/>
        </>
      )}
    </MainWrapper>
  );
}

export default CustomizerLayout;
