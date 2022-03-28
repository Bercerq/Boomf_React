import React from 'react';
import Confetti from "../Confetti";
import ConfettiTaDahComponent from "./ConfettiTaDah";

import {ConfettiWrapperCannonColumn} from "../Cannon/style";

const ConfettiTaDah = () => {
  return (
    <ConfettiWrapperCannonColumn>
      <Confetti textPosition='center' lastChild={true}>
        <ConfettiTaDahComponent justifyContent='flex-start'/>
      </Confetti>
    </ConfettiWrapperCannonColumn>
  );
};

export default ConfettiTaDah;