import React from 'react';

import TaDahComponent from "./TaDah";
import {confettiDataCannon} from "../../../utils/constants/ConfettiData";

const TaDah = () => {
  return (
    <TaDahComponent
      imageData={[...confettiDataCannon, ...confettiDataCannon, ...confettiDataCannon]}
      type='TaDah'
      title='Ta Dah'
    />
  )
};

export default TaDah;