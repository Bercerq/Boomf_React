import React from "react";

import { useDispatch } from "react-redux";
import { getBoomfImages } from "../../../../redux/actions/images";

import { DivUploadImage, TitleCollection, UploadedImg } from "../style";

function LibraryCategories({ data }) {
  const dispatch = useDispatch();
  const handleSetCategories = (e) => () => {
    dispatch(getBoomfImages({ productType: "exploding_card", name: e.slug }));
  };

  return (
    <div key={data.id}>
      <DivUploadImage>
        <UploadedImg
          activeId={0}
          id={data.id}
          onClick={handleSetCategories(data)}
          src={data.image}
          alt={data.name}
        />
      </DivUploadImage>
      <TitleCollection>{data.name}</TitleCollection>
    </div>
  );
}

export default LibraryCategories;
