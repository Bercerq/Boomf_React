import React from "react";
import { useState } from "react";
import { BoombData } from "../../utils/constants/BoombData";
import Panel from "../../components/Customizer/Customiser_Panel/Panel";
import Cube from "../../components/Customizer/Boomb/Cube";

function Boomb() {
  const [cubeData, setCubeData] = useState(BoombData);
  const [selectConfetti, setSelectConfetti] = useState({
    img: "https://www.pngplay.com/wp-content/uploads/6/Falling-Confetti-PNG-HD-Quality.png",
    name: "Pink",
  });

  return (
    <Panel
      selectConfetti={selectConfetti}
      setSelectConfetti={setSelectConfetti}
    >
      <Cube
        selectConfetti={selectConfetti}
        setCubeData={setCubeData}
        cubeData={cubeData}
      />
    </Panel>
  );
}

export default Boomb;
