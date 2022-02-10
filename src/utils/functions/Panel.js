import { panelData } from "./../constants/PanelData";

import AddTextOption from "../../components/Customizer/Customiser_Panel/Options/AddTextOption";
import AddPhotoOption from "../../components/Customizer/Customiser_Panel/Options/AddPhotoOption";
import StickerOption from "../../components/Customizer/Customiser_Panel/Options/StickerOption";
import ChouseMessageOption from "../../components/Customizer/Customiser_Panel/Options/ChouseMessageOption";

import {
  Option,
  OptionIcon,
  Icon,
  OptionText,
} from "../../components/Customizer/Customiser_Panel/style";

export const drawOption = (title) => {
  switch (title) {
    case "+ Add text":
      return <AddTextOption />;
    case "+ Add photo":
      return <AddPhotoOption />;
    case "+ Sticker":
      return <StickerOption />;
    case "Choose a message":
      return <ChouseMessageOption />;
    default:
      break;
  }
};

export const findPanelOption = (options, setOpenSideBar) =>
  options?.map((option) =>
    panelData.map(({ icon, text, flag }) => {
      switch (flag) {
        case option:
          return (
            <Option onClick={selectOption(text, setOpenSideBar)} key={flag}>
              <OptionIcon>
                <Icon src={icon} alt={text} />
              </OptionIcon>
              <OptionText>{text}</OptionText>
            </Option>
          );
        default:
          break;
      }
    })
  );

const selectOption = (text, setOpenSideBar) => () => {
  setOpenSideBar({ state: true, title: text });
};
