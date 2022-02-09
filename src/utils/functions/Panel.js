import AddPhoto from "../../components/Customizer/Customiser_Panel/Options/AddPhoto";
import AddText from "../../components/Customizer/Customiser_Panel/Options/AddText";
import ChouseMessage from "../../components/Customizer/Customiser_Panel/Options/ChouseMessage";
import Sticker from "../../components/Customizer/Customiser_Panel/Options/Sticker";

export const selectOption = (text, setOpenSideBar) => () => {
  setOpenSideBar({ state: true, title: text });
};

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
