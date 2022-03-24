import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DivCollectionImage } from "./style";
import LibraryImages from "./components/LibraryImages";
import LibraryCategories from "./components/LibraryCategories";
import Search from "./components/Search";

const BoomfDesigns = ({ setSubTitle }) => {
  const { categories, images } = useSelector(
    ({ boomfImagesReducer }) => boomfImagesReducer
  );
  const { searchedImage } = useSelector(
    ({ boomfImagesReducer }) => boomfImagesReducer
  );
  const [filterdImages, setFilteredImages] = useState();
  useEffect(() => {
    setFilteredImages(
      categories?.filter(({ name }) => name.includes(searchedImage))
    );
  }, [searchedImage]);

  return (
    <React.Fragment>
      <Search />
      <DivCollectionImage>
        {images ? (
          images?.map((data, idx) => (
            <LibraryImages key={"LibraryImages" + idx} data={data} />
          ))
        ) : (
          <LibraryCategories
            categories={filterdImages ? filterdImages : categories}
            setSubTitle={setSubTitle}
          />
        )}
      </DivCollectionImage>
    </React.Fragment>
  );
};

export default BoomfDesigns;
