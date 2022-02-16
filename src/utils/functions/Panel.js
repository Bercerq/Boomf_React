import { setCurrentSidebar } from "../../redux/actions/sideBar";

import { panelData } from "../constants/PanelData";

import AddTextOption from "../../components/Sidebar/Options/AddTextOption";
import AddPhotoOption from "../../components/Sidebar/Options/AddPhotoOption";
import StickerOption from "../../components/Sidebar/Options/StickerOption";
import ChouseMessageOption from "../../components/Sidebar/Options/ChouseMessageOption";

import {
  Option,
  OptionIcon,
  Icon,
  OptionText,
} from "../../components/Sidebar/style";

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

export const findPanelOption = (dispatch) =>
  panelData.map(({ icon, text, flag }) => {
    return (
      <Option
        onClick={() => dispatch(setCurrentSidebar({ state: true, flag: text }))}
        key={flag}
      >
        <OptionIcon>
          <Icon src={icon} alt={text} />
        </OptionIcon>
        <OptionText>{text}</OptionText>
      </Option>
    );
  });
