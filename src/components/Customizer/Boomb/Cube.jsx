import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setBoomb } from "../../../redux/actions/boomb";
import { updateItem } from "../../../utils/functions/boomb";

import { useFocus } from "../../../utils/hooks/useFocus";

import BlueButton from "../../Buttons/BlueButton";
import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";
import Modal from "../../Modal/Modal";

import { SideContent } from "./CubeSection/style";

function Cube({ cubeData, setCubeData, selectConfetti }) {
  const [currPosition, setCurrPosition] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [topText, setTopText] = useState("");
  const [openModal, setOpenModal] = useState({ state: false, title: "" });

  const [inputRef, setInputFocus] = useFocus();

  const dispatch = useDispatch();

  useEffect(() => {
    updateItem(
      currPosition,
      { img: currentImage },
      cubeData,
      setCubeData,
      setCurrentImage
    );
  }, [currentImage]);

  const handleButtonClick = () => {
    let boxArr = [];
    cubeData.map(({ img, position }) => {
      boxArr.push({ img, position });
    });
    dispatch(
      setBoomb({
        ...boxArr,
        topText,
        confetti: selectConfetti.img,
      })
    );
    setOpenModal({ title: "Add to cart", state: true });
  };

  return (
    <>
      <SideContent>
        <CubeSection
          selectConfetti={selectConfetti}
          topText={topText}
          setCurrPosition={setCurrPosition}
          setCurrentImage={setCurrentImage}
          currPosition={currPosition}
          cubeData={cubeData}
          setInputFocus={setInputFocus}
        />

        <BottomSection
          inputRef={inputRef}
          handleButtonClick={handleButtonClick}
          topText={topText}
          setTopText={setTopText}
          cubeData={cubeData}
          setCurrentImage={setCurrentImage}
          setCurrPosition={setCurrPosition}
        />
      </SideContent>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h1 style={{ textAling: "center" }}>Item add</h1>
        <BlueButton>Checkout</BlueButton>
      </Modal>
    </>
  );
}

export default Cube;
