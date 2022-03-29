import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setImageLibrary } from "../../redux/actions/imageLibrary";
import { setMallowPops } from "../../redux/actions/mallowPops";
import { selectUploadedImage } from "../../redux/actions/sideBar";

function useUpdateMallowPops(img, mallowpops, id) {
  const dispatch = useDispatch();
  useEffect(() => {
    let index = mallowpops?.findIndex((x) => x.id === id);
    if (index !== -1) {
      if (img) {
        dispatch(
          setMallowPops([
            ...mallowpops.slice(0, index),
            Object.assign({}, mallowpops[index], { image: img }),
            ...mallowpops.slice(index + 1),
          ])
        );
      }
    }
    dispatch(setImageLibrary(""));
  }, [img, dispatch]);
}

export default useUpdateMallowPops;
