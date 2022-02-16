import React from "react";
import { сonfettiData } from "../../utils/constants/ConfettiData";

import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";

function Boomb() {
  return (
    <CustomizerLayout сonfettiData={сonfettiData} title="Boomb customizer">
      <Cube />
    </CustomizerLayout>
  );
}

export default Boomb;
