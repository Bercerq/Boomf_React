import React from "react";

import MicrophoneIcon from "../../../../utils/assets/svg/MicrophoneIcon.svg";
import SearchIcon from "../../../../utils/assets/svg/Search.svg";

import {
  DivContainerMicro,
  DivMicroIcon,
  DivSearchIcon,
  InputFilterImage,
} from "../style";

function Search() {
  return (
    <DivContainerMicro>
      <DivSearchIcon>
        <img src={SearchIcon} alt="Search" />
      </DivSearchIcon>
      <InputFilterImage
        type="text"
        placeholder="Search for designs..."
        maxLength={50}
      />
      <DivMicroIcon>
        <img src={MicrophoneIcon} alt="MicrophoneIcon" />
      </DivMicroIcon>
    </DivContainerMicro>
  );
}

export default Search;
