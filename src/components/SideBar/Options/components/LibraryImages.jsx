import React from "react";
import { useDispatch } from "react-redux";

import { setAddImageLibrary } from "../../../../redux/actions/imageLibrary";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import { DivUploadImage, TitleCollection, UploadedImg } from "../style";

function LibraryImages({ data }) {
  const dispatch = useDispatch();
  const addImage = (e) => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
    dispatch(setAddImageLibrary({ img: e.images, alt: e.name }));
  };

  return (
    <div key={data.id}>
      <DivUploadImage>
        <UploadedImg
          activeId={0}
          id={data.id}
          onClick={() => addImage(data)}
          src={data.image}
          alt={data.name}
        />
      </DivUploadImage>
      <TitleCollection title={data.name}>{data.name}</TitleCollection>
    </div>
  );
}

export default LibraryImages;
