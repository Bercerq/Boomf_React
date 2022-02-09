import React from "react";
import { ModalWindow, ModalContent, ModalTitle, Title, Close } from "./style";
import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";

function Modal({ openModal, setOpenModal, children }) {
  const closeSideBar = () => {
    setOpenModal({ ...openModal, state: false });
  };
  return (
    <ModalWindow openSideBar={openModal.state} onClick={closeSideBar}>
      <ModalContent
        openSideBar={openModal.state}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTitle>
          <Title>{openModal.title}</Title>
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
