import React from "react";

import {MainWrapper} from "./style";
import Sidebar from "../SideBar/SideBar";

function CustomizerLayout({title, children}) {
  return (
    <MainWrapper>
      <title>{title}</title>
      <Sidebar/>
      {children}
    </MainWrapper>
  );
}

export default CustomizerLayout;
