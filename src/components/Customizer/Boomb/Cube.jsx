import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentModal } from "../../../redux/actions/modal";
import { selectUploadedImage } from "../../../redux/actions/sideBar";
import { sendBoomb } from "../../../redux/actions/boomb";

import { updateItem } from "../../../utils/functions/boomb";

import BlueButton from "../../Buttons/BlueButton";
import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";
import Modal from "../../Modal/Modal";

import { SideContent } from "./CubeSection/style";


function Cube() {
  const [topText, setTopText] = useState("");

  const dispatch = useDispatch();

  const { editCrop, curCubePosition, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const { curCubeImage } = useSelector(({ sidebarReducer }) => sidebarReducer);

  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  useEffect(() => {
    if (curCubeImage) {
      updateItem(curCubePosition, { img: curCubeImage }, boombData, dispatch);
    } else if (editCrop) {
      updateItem(curCubePosition, { editCrop }, boombData, dispatch);
    }
    dispatch(selectUploadedImage(""));
  }, [curCubeImage, editCrop]);

  const handleButtonClick = () => {
    let boxArr = [];
    boombData?.map((data) => {
      boxArr.push(data);
    });
    dispatch(sendBoomb([...boxArr, topText, { confetti: confettiState.img }]));
    dispatch(
      setCurrentModal({
        title: "Add to cart",
        state: true,
      })
    );
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
      <Modal>
        <h1 style={{ textAling: "center" }}>Item add</h1>
        <BlueButton>Checkout</BlueButton>{" "}
      </Modal>
    </>
  );
}

export default Cube;
