import React from 'react';
import { BlueBtn } from './style';

function BlueButton({handleButtonClick, children}) {
  return (
   <BlueBtn onClick={handleButtonClick}>
     {children}
    </BlueBtn>
    )

}

export default BlueButton;
