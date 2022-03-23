import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentSidebar } from "../../redux/actions/sideBar";

import CloseIcon from "./../../utils/assets/svg/CloseIcon.svg";
import ArrowLeftIcon from "./../../utils/assets/svg/ArrowLeftIcon.svg";

import {
  SideBarWindow,
  SideBarContent,
  SideContent,
  SideBarTitle,
  Title,
  Close,
  DivBackTitle,
  DivArrowLeft,
} from "./style";
import { getBoomfImages, setImages } from "../../redux/actions/images";

function SidebarOpen({ children, currentSidebar }) {
  const dispatch = useDispatch();

  const { images } = useSelector(
    ({ boomfImagesReducer }) => boomfImagesReducer
  );
  const closeSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "", state: false }));
  };
  const backSideBar = () => {
    if (images) {
      dispatch(setImages());
      dispatch(setCurrentSidebar({ flag: "Boomf designs", state: true }));
    } else {
      dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
    }
  };

  return (
    <SideBarWindow currentSidebar={currentSidebar.state} onClick={closeSideBar}>
      <SideBarContent
        currentSidebar={currentSidebar.state}
        onClick={(e) => e.stopPropagation()}
      >
        <SideBarTitle>
          {/*todo*/}
          {currentSidebar.flag === "Boomf designs" ? (
            <DivBackTitle>
              <DivArrowLeft onClick={backSideBar}>
                <img src={ArrowLeftIcon} alt="ArrowLeftIcon" />
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
