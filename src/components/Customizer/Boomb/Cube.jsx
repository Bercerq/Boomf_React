import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setBoomb } from "../../../redux/actions/boomb";
import { updateItem } from "../../../utils/functions/boomb";

import BlueButton from "../../Buttons/BlueButton";
import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";
import Modal from "../../Modal/Modal";

import { SideContent } from "./CubeSection/style";

function Cube({ cubeData, setCubeData, confettiState }) {
  const [currPosition, setCurrPosition] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [openModal, setOpenModal] = useState({ state: false, title: "" });
  const [topText, setTopText] = useState("");

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
        confetti: confettiState.img,
      })
    );
    setOpenModal({
      title: "Add to cart",
      state: true,
    });
  };

  return (
    <>
      <SideContent>
        <CubeSection
          confettiState={confettiState}
          topText={topText}
          setCurrPosition={setCurrPosition}
          setCurrentImage={setCurrentImage}
          currPosition={currPosition}
          cubeData={cubeData}
          setTopText={setTopText}
        />

        <BottomSection
          handleButtonClick={handleButtonClick}
          cubeData={cubeData}
          setCurrentImage={setCurrentImage}
          setCurrPosition={setCurrPosition}
          currPosition={currPosition}
        />
      </SideContent>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h1 style={{ textAling: "center" }}>Item add</h1>
        <BlueButton>Checkout</BlueButton>{" "}
      </Modal>
    </>
  );
}

export default Cube;
