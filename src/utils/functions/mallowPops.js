import { setCurrentModal } from "../../redux/actions/modal";

export const addMallowPopsToCart = ({ mallowpops, textData, dispatch }) => {
  let mallowSides = [];
  mallowpops?.map(({ imgage, id }) =>
    mallowSides.push({ image: { url: imgage }, position: id })
  );
  let sendingProduct = {
    images: mallowSides,
    giftMessage: textData,
  };
  console.log(sendingProduct);
  dispatch(
    setCurrentModal({
      title: "Add to cart",
      state: true,
    })
  );
};
