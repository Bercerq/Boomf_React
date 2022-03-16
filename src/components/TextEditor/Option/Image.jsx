import React from "react";

import TrashCan from "../../../utils/assets/svg/TrashCan.svg";
import ImageIcon from "../../../utils/assets/svg/ImageIcon.svg";

import {
  CurrentValue,
  Slider,
  SliderContainerImage,
  ImageWrapper,
  EditActions,
  ActionItem,
  Icon,
  ImageItem,
  Text,
} from "../style";
import { updateItem } from "../../../utils/functions/boomb";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSidebar } from "../../../redux/actions/sideBar";
import {setDeleteImageLibrary} from "../../../redux/actions/imageLibrary";
import {setUpdateTextData} from "../../../redux/actions/textData";

function Image({ option, setOption }) {
  const dispatch = useDispatch();
  const { curCubePosition, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const {imageState} = useSelector((
    {imageLibraryReducer}) => imageLibraryReducer
  )

  const setValue = (e) => {
    setOption(e.target.value);
  };

  const deleteCurrentImage = () => {
    updateItem(curCubePosition, { img: "" }, boombData, dispatch);
    //todo cannon
    dispatch(setUpdateTextData({key: 'currentEditor', value: { flag: "", state: false }}));
    dispatch(setDeleteImageLibrary(imageState.id));
  };

  const openSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };

  return (
    <ImageWrapper>
      <EditActions>
        <ActionItem onClick={deleteCurrentImage}>
          <Icon>
            <ImageItem src={TrashCan} alt="Remoove" />
          </Icon>
          <Text>Remove</Text>
        </ActionItem>
        <ActionItem onClick={openSideBar}>
          <Icon>
            <ImageItem src={ImageIcon} alt="Replace" />
          </Icon>
          <Text>Replace</Text>
        </ActionItem>
      </EditActions>
      <SliderContainerImage>
        <CurrentValue>{option ? +option : 1}x</CurrentValue>
        <Slider
          onChange={setValue}
          type="range"
          min="1"
          max="3"
          step="0.1"
          value={option ? +option : 1}
        />
      </SliderContainerImage>
    </ImageWrapper>
  );
}

export default Image;
