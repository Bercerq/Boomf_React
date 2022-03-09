import React from 'react';

import Confetti from "./Confetti";
import Background from "./Background";
import {ConfettiWrapperCannonColumn} from "./style";

const CannonRightColumn = () => {
return (
    <ConfettiWrapperCannonColumn>
      <Background />
      <Confetti/>
    </ConfettiWrapperCannonColumn>
  );
};

export default CannonRightColumn;