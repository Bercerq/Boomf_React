import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendBoomb } from "../../../redux/actions/boomb";
import { updateItem } from "../../../utils/functions/boomb";

import BlueButton from "../../Buttons/BlueButton";
import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";
import Modal from "../../Modal/Modal";

import { SideContent } from "./CubeSection/style";

function Cube() {
  const [openModal, setOpenModal] = useState({ state: false, title: "" });
  const [topText, setTopText] = useState("");
  const dispatch = useDispatch();

  const { editCrop, curCubePosition, boombData, curCubeImage } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );
  useEffect(() => {
    if (curCubeImage) {
      updateItem(curCubePosition, { img: curCubeImage }, boombData, dispatch);
    } else if (editCrop) {
      updateItem(curCubePosition, { editCrop }, boombData, dispatch);
    }
  }, [curCubeImage, editCrop]);

  const handleButtonClick = () => {
    let boxArr = [];
    boombData?.map((data) => {
      boxArr.push(data);
    });
    dispatch(sendBoomb([...boxArr, topText, { confetti: confettiState.img }]));
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
          setTopText={setTopText}
        />

        <BottomSection handleButtonClick={handleButtonClick} />
      </SideContent>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h1 style={{ textAling: "center" }}>Item add</h1>
        <BlueButton>Checkout</BlueButton>{" "}
      </Modal>
    </>
  );
}

export default Cube;
