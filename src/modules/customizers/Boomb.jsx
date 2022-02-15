import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { BoombData } from "../../utils/constants/BoombData";
import { ConfettiData } from "../../utils/constants/ConfettiData";

import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";

function Boomb() {
  const [cubeData, setCubeData] = useState(BoombData);

  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  return (
    <CustomizerLayout
      ConfettiData={ConfettiData}
      title="Boomb customizer"
      confettiState={confettiState}
    >
      <Cube
        setCubeData={setCubeData}
        cubeData={cubeData}
        confettiState={confettiState}
      />
    </CustomizerLayout>
  );
}

export default Boomb;
