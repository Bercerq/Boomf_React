import React from "react";
import { WhiteBtn } from "./style";

function WhiteButton({
  handleButtonClick,
  children,
  background,
  color,
}) {
  return (
    <WhiteBtn
      color={color}
      background={background}
      onClick={handleButtonClick}
    >
      {children}
    </WhiteBtn>
  );
}

export default WhiteButton;
