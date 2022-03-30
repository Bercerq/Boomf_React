import React from 'react';
import {useSelector} from "react-redux";

import Confetti from "../Confetti";
import ConfettiTaDahComponent from "./ConfettiTaDah";

import {ConfettiWrapperTaDahColumn} from "./style";

const ConfettiTaDah = ({title}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <ConfettiWrapperTaDahColumn displayOpacity={standardName}>
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