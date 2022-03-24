import { TextField } from "@mui/material";
import React from "react";
import { FieldWrapper } from "./style";

function FormField({ input, meta, children, setEyeState, eyeState, ...rest }) {
  const changeInputType = () => {
    setEyeState(!eyeState);
  };
  const { touched, error } = meta;
  return (
    <FieldWrapper eyeState={eyeState}>
      {/* <TextField {...rest} {...input} /> */}

      <TextField
        error={Boolean(touched && error)}
        helperText={touched && error && <span> {error} </span>}
        label={rest.placeholder}
        {...rest}
        {...input}
      />
      {children && (
        <img onClick={changeInputType} src={children} alt={input.type} />
      )}
    </FieldWrapper>
  );
}

export default FormField;
