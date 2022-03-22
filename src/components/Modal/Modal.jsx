import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentModal } from "../../redux/actions/modal";
import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";
import { ModalWindow, ModalContent, ModalTitle, Title, Close } from "./style";

function Modal({ children }) {
  const { currentModal } = useSelector(({ modalReducer }) => modalReducer);

  const dispatch = useDispatch();

  const closeSideBar = () => {
    dispatch(setCurrentModal({ title: currentModal.title, state: false }));
  };

  return (
    <ModalWindow openSideBar={currentModal.state} onClick={closeSideBar}>
      <ModalContent
        openSideBar={currentModal.state}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTitle>
          <Title>{currentModal.title}</Title>
          <Close onClick={closeSideBar}>
            <img src={CloseIcon} alt="close" />
          </Close>
        </ModalTitle>
        {children}
      </ModalContent>
    </ModalWindow>
  );
}

export default Modal;
