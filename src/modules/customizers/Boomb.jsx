import React from "react";
import { useState } from "react";
import { BoombData } from "../../utils/constants/BoombData";

import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";

function Boomb() {
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [textEditorOptions, setTextEditorOptions] = useState({
    font: "",
    size: "",
    colour: "",
    alignment: "",
   });
  const [cubeData, setCubeData] = useState(BoombData);
  const [selectConfetti, setSelectConfetti] = useState({
    img: "https://www.pngplay.com/wp-content/uploads/6/Falling-Confetti-PNG-HD-Quality.png",
    name: "Pink",
  });

  return (
    <CustomizerLayout
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
