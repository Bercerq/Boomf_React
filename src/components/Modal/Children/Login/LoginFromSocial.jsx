import React from "react";
import { SocialWrapper } from "../style";

import Facebook from "../../../../utils/assets/svg/Facebook.svg";
import Google from "../../../../utils/assets/svg/Google.svg";
import SideBarButton from "../../../Buttons/SideBarButton";

function LoginFromSocial() {
  const sidebarButtons = [
    { text: "Continue with Facebook", img: Facebook },
    { text: "Continue with Google", img: Google },
  ];
  return (
    <SocialWrapper>
      {" "}
      <fieldset>
        <legend>or</legend>
      </fieldset>
      {sidebarButtons.map(({ text, img, action }) => (
        <SideBarButton key={text} handleButtonClick={action}>
          <img src={img} alt={text} />
          <div>{text}</div>
        </SideBarButton>
      ))}
    </SocialWrapper>
  );
}

export default LoginFromSocial;
