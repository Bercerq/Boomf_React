import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import { setCurrentEditor } from "../../../../redux/actions/textEditor";

import { findBoxSide } from "../../../../utils/functions/boomb";

import EditPencil from ".././../../../utils/assets/svg/EditPencil.svg";

import { EditButton, EditIcon, NoImage, SideImage } from "./style";

function CubeImage({ img, position, editCrop }) {
  const dispatch = useDispatch();

  const openEditor = () => {
    dispatch(setCurrentEditor({ flag: "Image", state: true }));
  };
  const openSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };
  return img ? (
    <>
      <SideImage
        onClick={openSideBar}
        editCrop={editCrop}
        src={img}
        alt={findBoxSide(position)}
      />
      <EditButton onClick={openEditor}>
        <EditIcon src={EditPencil} alt="edit" />
      </EditButton>
    </>
  ) : (
    <NoImage onClick={openSideBar}>+ Photo {findBoxSide(position)}</NoImage>
  );
}

export default CubeImage;
