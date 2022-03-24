import React from "react";
import { WhiteBtn } from "./style";

function WhiteButton({
  handleButtonClick,
  children,
  background,
  color,
  marginDesktop
}) {
  return (
    <WhiteBtn
      color={color}
      background={background}
      onClick={handleButtonClick}
      marginDesktop={marginDesktop}
    >
      {children}
    </WhiteBtn>
  );
}

export default WhiteButton;
