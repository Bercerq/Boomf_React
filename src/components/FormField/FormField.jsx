import React from "react";
import { FieldWrapper, TextField } from "./style";

function FormField({ input, children, setEyeState, eyeState, ...rest }) {
  const changeInputType = () => {
    setEyeState(!eyeState);
  };

  return (
    <FieldWrapper>
      <TextField {...rest} {...input} />
      {children && (
        <img onClick={changeInputType} src={children} alt={input.type} />
      )}
    </FieldWrapper>
  );
}

export default FormField;
