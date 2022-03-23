import React from "react";
import { useSelector } from "react-redux";

import { DivCollectionImage } from "./style";
import LibraryImages from "./components/LibraryImages";
import LibraryCategories from "./components/LibraryCategories";
import Search from "./components/Search";

const BoomfDesigns = () => {
  const { categories, images } = useSelector(
    ({ boomfImagesReducer }) => boomfImagesReducer
  );

  return (
    <React.Fragment>
      <Search />
      <DivCollectionImage>
        {images
          ? images?.map((data) => <LibraryImages data={data} />)
          : categories?.map((data) => <LibraryCategories data={data} />)}
      </DivCollectionImage>
    </React.Fragment>
  );
};

export default BoomfDesigns;
