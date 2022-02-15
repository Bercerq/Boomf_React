import React from "react";
import { useState } from "react";
import { BoombData } from "../../utils/constants/BoombData";

import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";

import { useSelector } from "react-redux";
function Boomb() {
  const [cubeData, setCubeData] = useState(BoombData);

  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  return (
    <CustomizerLayout title="Boomb customizer" confettiState={confettiState}>
      <Cube
        setCubeData={setCubeData}
        cubeData={cubeData}
        confettiState={confettiState}
      />
    </CustomizerLayout>
  );
}

export default Boomb;
