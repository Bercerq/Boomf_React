import React from "react";
import {
  SideBarWindow,
  SideBarContent,
  SideBarTitle,
  Title,
  Close,
} from "./style";
import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";

function SideBar({ openSideBar, setOpenSideBar, children }) {
  const closeSideBar = () => {
    setOpenSideBar({ ...openSideBar, state: false });
  };

  return (
    <SideBarWindow openSideBar={openSideBar.state} onClick={closeSideBar}>
      <SideBarContent
        openSideBar={openSideBar.state}
        onClick={(e) => e.stopPropagation()}
      >
        <SideBarTitle>
          <Title>{openSideBar.title}</Title>
          <Close onClick={closeSideBar}>
            <img src={CloseIcon} alt="close" />
          </Close>
        </SideBarTitle>
        {children}
      </SideBarContent>
    </SideBarWindow>
  );
}

export default SideBar;
