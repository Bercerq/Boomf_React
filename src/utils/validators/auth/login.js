import { cyrillicRE, emailRE, passwordSpacesRE } from "../RegularExpressions";

export const loginValidator = (values) => {
  const errors = {};
  // EMAIL
  if (!values.email) {
    errors.email = "Required";
  }
  if (!emailRE.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // PASSWORD
  if (!values.password) {
    errors.password = "Required";
  } else if (!values.password.match(passwordSpacesRE)) {
    errors.password = "Password must not contain spaces";
  } else if (values.password.length < 8) {
    errors.password = "Minimum 8 characters";
  } else if (values.password.match(cyrillicRE)) {
    errors.password = "Only latin";
  }
  return errors;
};
