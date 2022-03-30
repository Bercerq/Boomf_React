import React from 'react';

import TaDahComponent from "./TaDah/TaDah";
import {butterfliesDataFlutter} from "../../utils/constants/ConfettiData";

const Flutter = () => {
  return (
    <TaDahComponent
      imageData={butterfliesDataFlutter}
      type='Flutter'
      title='Flutter'
    />
  )
};

export default Flutter;