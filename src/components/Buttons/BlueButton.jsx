import React from 'react';
import { CustomButtonBlue } from './style';

function BlueButton({handleButtonClick, children}) {
  return (
   <CustomButtonBlue onClick={handleButtonClick}>
     {children}
    </CustomButtonBlue>
    )

}

export default BlueButton;
