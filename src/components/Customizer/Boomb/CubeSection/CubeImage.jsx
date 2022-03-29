import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateTextData } from "../../../../redux/actions/textData";

import { findBoxSide } from "../../../../utils/functions/boomb";

import EditPencil from ".././../../../utils/assets/svg/EditPencil.svg";

import { EditButton, EditIcon, NoImage, SideImage } from "./style";

function CubeImage({ textDataState, img, position, editCrop }) {
  const dispatch = useDispatch();

  const openEditor = (e) => {
    if (!textDataState.focusState) {
      console.log(123);
      dispatch(
        setUpdateTextData({
          key: "currentEditor",
          value: { flag: "Image", state: true },
        })
      );
      dispatch(setUpdateTextData({ key: "focusState", value: true }));
      e.stopPropagation();
    }
  };

  return img ? (
    <>
      <SideImage
        textDataState={textDataState}
        editCrop={editCrop}
        src={img}
        alt={findBoxSide(position)}
      />
      <EditButton onClick={openEditor}>
        <EditIcon src={EditPencil} alt="edit" />
      </EditButton>
    </>
  ) : (
    <NoImage textDataState={textDataState}>
      + Photo {findBoxSide(position)}
    </NoImage>
  );
}

export default CubeImage;
