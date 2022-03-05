import React from "react";
import { useDispatch } from "react-redux";

import { setCurrentSidebar } from "../../redux/actions/sideBar";

import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";
import ArrowLeftIcon from "./../../utils/assets/svg/ArrowLeftIcon.svg";

import {
  SideBarWindow,
  SideBarContent,
  SideContent,
  SideBarTitle,
  Title,
  Close, DivBackTitle, DivArrowLeft,
} from "./style";

function SidebarOpen({ children, currentSidebar }) {
  const dispatch = useDispatch();

  const closeSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "", state: false }));
  };
  const backSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  }

  return (
    <SideBarWindow currentSidebar={currentSidebar.state} onClick={closeSideBar}>
      <SideBarContent
        currentSidebar={currentSidebar.state}
        onClick={(e) => e.stopPropagation()}
      >
        <SideBarTitle>
          {/*todo*/}
          {currentSidebar.flag === 'Boomf designs' ? (
              <DivBackTitle>
                <DivArrowLeft onClick={backSideBar}>
                  <img src={ArrowLeftIcon} alt="ArrowLeftIcon"/>
                </DivArrowLeft>
                <Title>{currentSidebar.flag}</Title>
              </DivBackTitle>
          ) : (
            <Title>{currentSidebar.flag}</Title>
          )}

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
