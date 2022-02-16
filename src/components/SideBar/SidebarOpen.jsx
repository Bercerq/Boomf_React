import React from "react";
import {
  SideBarWindow,
  SideBarContent,
  SideContent,
  SideBarTitle,
  Title,
  Close,
} from "./style";
import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";
import { useDispatch } from "react-redux";
import { setCurrentSidebar } from "../../redux/actions/sideBar";

function SidebarOpen({ children, currentSidebar }) {
  const dispatch = useDispatch();
  const closeSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "", state: false }));
  };
  return (
    <SideBarWindow currentSidebar={currentSidebar.state} onClick={closeSideBar}>
      <SideBarContent
        currentSidebar={currentSidebar.state}
        onClick={(e) => e.stopPropagation()}
      >
        <SideBarTitle>
          <Title>{currentSidebar.flag}</Title>
          <Close onClick={closeSideBar}>
            <img src={CloseIcon} alt="close" />
          </Close>
        </SideBarTitle>
        <SideContent currentSidebar={currentSidebar}>{children}</SideContent>
      </SideBarContent>
    </SideBarWindow>
  );
}

export default SidebarOpen;
