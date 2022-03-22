import React from "react";
import SideBarButton from "../../../Buttons/SideBarButton";
import { ButtonsItem, ButtonsWrapper } from "../style";

import Facebook from "../../../../utils/assets/svg/Facebook.svg";
import boomfDesign from "../../../../utils/assets/svg/boomf.svg";
import PrewUpload from "../../../../utils/assets/svg/PrewUpload.svg";
import { useDispatch } from "react-redux";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";
import { setCurrentModal } from "../../../../redux/actions/modal";
import Modal from "../../../Modal/Modal";

function Buttons() {
  const dispatch = useDispatch();

  const facebook = () => {
    console.log("facebook");
  };
  const boomf = () => {
    dispatch(setCurrentSidebar({ state: true, flag: "Boomf designs" }));
  };
  const prew = () => {
    dispatch(
      setCurrentModal({
        title: "Log in",
        state: true,
      })
    );
  };
  const sidebarButtons = [
    { text: "Add from Facebook", action: facebook, img: Facebook },
    { text: "Add from Boomf designs", action: boomf, img: boomfDesign },
    { text: "Previously uploaded images", action: prew, img: PrewUpload },
  ];

  return (
    <>
      <ButtonsWrapper>
        <ButtonsItem>
          {sidebarButtons.map(({ text, img, action }) => (
            <SideBarButton key={text} handleButtonClick={action}>
              <img src={img} alt={text} />
              <div>{text}</div>
            </SideBarButton>
          ))}
        </ButtonsItem>
      </ButtonsWrapper>
    </>
  );
}

export default Buttons;
