import {setCurrentSidebar} from "../../redux/actions/sideBar";
import {setAddTextData} from "../../redux/actions/textData";

import {panelData} from "../constants/PanelData";

import AddTextOption from "../../components/SideBar/Options/AddTextOption";
import AddPhotoOption from "../../components/SideBar/Options/AddPhotoOption";
import StickerOption from "../../components/SideBar/Options/StickerOption";
import ChouseMessageOption from "../../components/SideBar/Options/ChouseMessageOption";
import BoomfDesigns from "../../components/SideBar/Options/BoomfDesigns";

import {
  Icon,
  Option,
  OptionIcon,
  OptionText,
} from "../../components/SideBar/style";
import BackgroundDevice from "../../components/Confetti/Cannon/MobileDevices/BackgroundDevice";
import React from "react";
import ConfettiDevice from "../../components/Confetti/Cannon/MobileDevices/ConfettiDevice";

export const drawOption = (title) => {
  switch (title) {
    case "+ Add text":
      return <AddTextOption/>;
    case "+ Add photo":
      return <AddPhotoOption/>;
    case "+ Sticker":
      return <StickerOption/>;
    case "Choose a message":
      return <ChouseMessageOption/>;
    case "Boomf designs":
      return <BoomfDesigns />
    default:
      break;
  }
};

export const findPanelOption = (dispatch) =>
  panelData.map(({icon, text, flag}) => {
    return (
      <Option
        onClick={() => text === '+ Add text' ? (
          dispatch(setAddTextData())
        ) : (
          dispatch(setCurrentSidebar({state: true, flag: text}))
        )}
        key={flag}
      >
        <OptionIcon>
          <Icon text={text} src={icon} alt={text}/>
        </OptionIcon>
        <OptionText>{text}</OptionText>
      </Option>
    );
  });

export const findMobileDevice = (activeDevice) => {
  if(activeDevice.selected) {
    if(activeDevice.title === 'Background') {
      return <BackgroundDevice/>
    }
    if(activeDevice.title === 'Confetti') {
      return <ConfettiDevice/>
    }
  }
}