import React from 'react';

import Confetti from "../Confetti";
import ConfettiTaDahComponent from "./ConfettiTaDah";

import {ConfettiWrapperTaDahColumn} from "./style";

const ConfettiTaDah = ({title}) => {
  return (
    <ConfettiWrapperTaDahColumn>
      <Confetti
        deviceTextPosition='start'
        textPosition='center'
        alignItem='flex-start'
        title={title}
        lastChild={true}
      >
        <ConfettiTaDahComponent justifyContent='flex-start'/>
      </Confetti>
    </ConfettiWrapperTaDahColumn>
  );
};

export default ConfettiTaDah;