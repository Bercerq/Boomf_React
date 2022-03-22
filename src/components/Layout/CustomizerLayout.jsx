import React, { useEffect } from "react";

import { MainWrapper } from "./style";
import Sidebar from "../SideBar/SideBar";
import TextEditor from "../TextEditor/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentSession } from "../../redux/actions/session";
import Modal from "../Modal/Modal";
import { findModalChildren } from "../../utils/functions/modal";

function CustomizerLayout({ title, editTextRef, children }) {
  const dispatch = useDispatch();

  const { currentModal } = useSelector(({ modalReducer }) => modalReducer);

  useEffect(() => {
    dispatch(getCurrentSession());
  }, []);
  return (
    <>
      <MainWrapper>
        <title>{title}</title>
        <Sidebar />
        <TextEditor editTextRef={editTextRef} />
        {children}
      </MainWrapper>
      <Modal>{findModalChildren(currentModal.title)}</Modal>
    </>
  );
}

export default CustomizerLayout;
