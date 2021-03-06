import React from "react";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { setAddImageLibrary } from "../../../../redux/actions/imageLibrary";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import { DivUploadImage } from "../style";

function LibraryImages({ data }) {
  const dispatch = useDispatch();
  const addImage = (e) => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
    dispatch(
      setAddImageLibrary({
        img: e.file.url,
        alt: e.name,
        source: "designs",
        height: e.file.height,
        width: e.file.width,
        __typename: e.file.__typename,
      })
    );
  };
  return (
    <div>
      <DivUploadImage>
        <LazyLoadImage
          onClick={() => addImage(data)}
          src={data.file.url}
          alt={data.name}
          effect="blur"
        />
      </DivUploadImage>
    </div>
  );
}

export default LibraryImages;
