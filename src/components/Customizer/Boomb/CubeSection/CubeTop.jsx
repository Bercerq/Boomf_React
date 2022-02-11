import React from "react";
import { useSelector } from "react-redux";
import { CubeItem, TopText, CubeSide } from "./style";

export const CubeTop = ({ topText, setInputFocus }) => {
  const { editTextData } = useSelector(({ boomb }) => boomb);
  return (
    <CubeSide onClick={setInputFocus} spinParam="rotateX(90deg)">
      <CubeItem topText={topText}>
        <TopText editTextData={editTextData}>{topText}</TopText>
      </CubeItem>
    </CubeSide>
  );
};
