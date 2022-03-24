import React from "react";

import { useDispatch } from "react-redux";
import { getBoomfImages } from "../../../../redux/actions/images";

import { DivUploadImage, TitleCollection } from "../style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LibraryCategories({ categories, setSubTitle }) {
  const dispatch = useDispatch();
  const handleSetCategories = (e) => () => {
    dispatch(getBoomfImages({ productType: "exploding_card", name: e.slug }));
    setSubTitle(e.name);
  };
  return (
    <>
      {categories?.map((data) => (
        <div key={data.id}>
          <DivUploadImage>
            <LazyLoadImage
              id={data.id}
              onClick={handleSetCategories(data)}
              src={data.image}
              alt={data.name}
              effect="blur"
            />
          </DivUploadImage>
          <TitleCollection>{data.name}</TitleCollection>
        </div>
      ))}
    </>
  );
}

export default LibraryCategories;
