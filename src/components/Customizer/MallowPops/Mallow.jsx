import React from "react";

import MallowCard from "./MallowCard/MallowCard";

import { MallowWrapper, MainWrapper } from "./style";

import BottomSection from "./BottomSection/BottomSection";
import MallowColums from "./MallowColums/MallowColums";
import { useSelector } from "react-redux";

function MallowPops({ editTextRef }) {
  const { standardName } = useSelector(
    ({ standardReducer }) => standardReducer
  );
  return (
    <MainWrapper>
      <MallowWrapper>
        <MallowColums editTextRef={editTextRef} standardName={standardName} />
        <MallowCard standardName={standardName} editTextRef={editTextRef} />
      </MallowWrapper>
      <BottomSection />
    </MainWrapper>
  );
}

export default MallowPops;
