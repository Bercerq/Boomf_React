import { panelData } from "./../constants/PanelData";

import AddPhoto from "../../components/Customizer/Customiser_Panel/Options/AddPhoto";
import AddText from "../../components/Customizer/Customiser_Panel/Options/AddText";
import ChouseMessage from "../../components/Customizer/Customiser_Panel/Options/ChouseMessage";
import Sticker from "../../components/Customizer/Customiser_Panel/Options/Sticker";

import {
  Option,
  OptionIcon,
  OptionText,
} from "../../components/Customizer/Customiser_Panel/style";

export const drawOption = (openSideBar) => {
  switch (openSideBar) {
    case "+ Add text":
      return <AddText />;
    case "+ Add photo":
      return <AddPhoto />;
    case "+ Sticker":
      return <Sticker />;
    case "Choose a message":
      return <ChouseMessage />;
    default:
      break;
  }
};

export const findPanelOption = (options, setOpenSideBar) =>
  options?.map((option) =>
    panelData.map(({ Icon, text, flag }) => {
      switch (flag) {
        case option:
          return (
            <Option onClick={selectOption(text, setOpenSideBar)} key={flag}>
              <OptionIcon>
                <img src={Icon} alt={text} />
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
