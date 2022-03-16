import React from "react";

import { MainWrapper } from "./style";
import Sidebar from "../SideBar/SideBar";
import TextEditor from "../TextEditor/TextEditor";

function CustomizerLayout({ title, editTextRef, children }) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <Sidebar />
      <TextEditor editTextRef={editTextRef} />
      {children}
    </MainWrapper>
  );
}

export default CustomizerLayout;
