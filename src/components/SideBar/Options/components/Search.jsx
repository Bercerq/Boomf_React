import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImage } from "../../../../redux/actions/images";

import MicrophoneIcon from "../../../../utils/assets/svg/MicrophoneIcon.svg";
import SearchIcon from "../../../../utils/assets/svg/Search.svg";

import {
  DivContainerMicro,
  DivMicroIcon,
  DivSearchIcon,
  InputFilterImage,
} from "../style";

function Search() {
  const dispatch = useDispatch();

  const { images } = useSelector(
    ({ boomfImagesReducer }) => boomfImagesReducer
  );
  const { searchedImage } = useSelector(
    ({ boomfImagesReducer }) => boomfImagesReducer
  );
  const handleFilter = (e) => {
    dispatch(searchImage(e.target.value));
  };
  return (
    <DivContainerMicro>
      {!images && (
        <>
          <DivSearchIcon>
            <img src={SearchIcon} alt="Search" />
          </DivSearchIcon>
          <InputFilterImage
            onChange={handleFilter}
            type="text"
            placeholder="Search for designs..."
            maxLength={50}
            defaultValue={searchedImage}
          />
          <DivMicroIcon>
            <img src={MicrophoneIcon} alt="MicrophoneIcon" />
          </DivMicroIcon>
        </>
      )}
    </DivContainerMicro>
  );
}

export default Search;
