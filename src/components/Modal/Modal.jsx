import React from "react";
import { ModalWindow, ModalContent, ModalTitle, Title, Close } from "./style";
import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";
import { useSelector } from "react-redux";
import { setCurrentModal } from "../../redux/actions/modal";
import { useDispatch } from "react-redux";

function Modal({ children }) {
  const { currentModal } = useSelector(({ modalReducer }) => modalReducer);

  const dispatch = useDispatch();

  const closeSideBar = () => {
    dispatch(setCurrentModal({ title: "", state: false }));
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
