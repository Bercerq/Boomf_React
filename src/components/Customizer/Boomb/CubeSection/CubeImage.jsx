import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";
import { setUpdateTextData } from "../../../../redux/actions/textData";

import EditPencil from ".././../../../utils/assets/svg/EditPencil.svg";

import { EditButton, EditIcon, NoImage, SideImage } from "./style";

function CubeImage({ textDataState, img, position, editCrop, sideName }) {
  const dispatch = useDispatch();

  const openEditor = () => {
    if (!textDataState.focusState) {
      dispatch(
        setUpdateTextData({
          key: "currentEditor",
          value: { flag: "Image", state: true },
        })
      );
    }
  };
  const openSideBar = () => {
    if (!textDataState.focusState)
      dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };
  return img ? (
    <>
      <SideImage
        textDataState={textDataState}
        editCrop={editCrop}
        src={img}
        alt={sideName}
        onClick={openSideBar}
      />
      <EditButton onClick={openEditor}>
        <EditIcon src={EditPencil} alt="edit" />
      </EditButton>
    </>
  ) : (
    <NoImage onClick={openSideBar} textDataState={textDataState}>
      + Photo {sideName}
    </NoImage>
  );
}

export default CubeImage;
