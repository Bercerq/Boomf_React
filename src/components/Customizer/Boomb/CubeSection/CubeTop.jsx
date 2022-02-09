import React from "react";
import { CubeItem, TopText, CubeSide } from "./style";

export const CubeTop = ({ topText, setInputFocus }) => {
  return (
    <CubeSide onClick={setInputFocus} spinParam="rotateX(90deg)">
      <CubeItem topText={topText}>
        <TopText>{topText}</TopText>
        <div className="hoverSide">Text</div>
      </CubeItem>
    </CubeSide>
  );
};
