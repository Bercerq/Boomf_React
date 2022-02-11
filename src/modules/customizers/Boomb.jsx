import React from "react";
import { useState } from "react";
import { BoombData } from "../../utils/constants/BoombData";

import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import BcGold1 from "../../utils/assets/png/confetti/BCGold-1.png";
function Boomb() {
  const [openTextEditor, setOpenTextEditor] = useState({
    flag: "",
    state: false,
  });
  const [cubeData, setCubeData] = useState(BoombData);
  const [selectConfetti, setSelectConfetti] = useState({
    img: BcGold1,
    name: "Gold",
  });

  return (
    <CustomizerLayout
      title="Boomb customizer"
      selectConfetti={selectConfetti}
      setSelectConfetti={setSelectConfetti}
      openTextEditor={openTextEditor}
      setOpenTextEditor={setOpenTextEditor}
    >
      <Cube
        setOpenTextEditor={setOpenTextEditor}
        selectConfetti={selectConfetti}
        setCubeData={setCubeData}
        cubeData={cubeData}
      />
    </CustomizerLayout>
  );
}

export default Boomb;
