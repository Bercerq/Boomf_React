import React, { useEffect } from "react";

import { MainWrapper } from "./style";
import Sidebar from "../SideBar/SideBar";
import TextEditor from "../TextEditor/TextEditor";
import { useDispatch } from "react-redux";
import { getCurrentSession } from "../../redux/actions/session";

function CustomizerLayout({ title, editTextRef, children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSession());
  }, []);
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
