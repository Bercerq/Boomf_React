import { Field, Form } from "react-final-form";
import React, { useState } from "react";

import FormField from "../../../FormField/FormField";
import BlueButton from "../../../Buttons/BlueButton";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";
import PasswordEye from "../../../../utils/assets/svg/PasswordEye.svg";

import { FormContainer } from "../../../FormField/style";
import { loginValidator } from "../../../../utils/validators/auth/login";

function LoginForm() {
  const onSubmit = (value) => {
    console.log(value);
  };

  const [eyeState, setEyeState] = useState(false);

  const LoginFields = [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: eyeState ? "text" : "password",
      name: "password",
      placeholder: "Password",
      icon: PasswordEye,
    },
  ];
  return (
    <Form
      onSubmit={onSubmit}
      validate={loginValidator}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContainer>
            {LoginFields.map(({ icon, ...field }, index) => (
              <Field
                key={index}
                {...field}
                variant="outlined"
                component={FormField}
                setEyeState={setEyeState}
                eyeState={eyeState}
              >
                {icon}
              </Field>
            ))}
            <BlueButton>
              Log in <img src={ArrowRightIcon} alt="add" />
            </BlueButton>
          </FormContainer>
        </form>
      )}
    />
  );
}

export default LoginForm;
