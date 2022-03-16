import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectUploadedImage } from "../../redux/actions/sideBar";
import { updateItem } from "../functions/boomb";

function useUpdateCube( curCubePosition, curCubeImage, boombData, editCrop ) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (curCubeImage) {
      updateItem(curCubePosition, { img: curCubeImage }, boombData, dispatch);
    } else if (editCrop) {
      updateItem(curCubePosition, { editCrop }, boombData, dispatch);
    }
    dispatch(selectUploadedImage(""));
  }, [curCubeImage, editCrop]);
}

export default useUpdateCube;
