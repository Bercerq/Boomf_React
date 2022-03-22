import BlueButton from "../../components/Buttons/BlueButton";
import Login from "../../components/Modal/Children/Login/Login";

export const findModalChildren = (title) => {
  switch (title) {
    case "Add to cart":
      return <BlueButton>Checkout</BlueButton>;
    case "Log in":
      return <Login />;
    default:
      break;
  }
};
