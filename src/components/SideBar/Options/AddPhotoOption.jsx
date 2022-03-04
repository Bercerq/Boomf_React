import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Switch, Route,} from "react-router-dom";

import {
  selectUploadedImage,
  setCurrentSidebar,
} from "../../../redux/actions/sideBar";

import Buttons from "./components/Buttons";
import ImageUploader from "./components/ImageUploader";

import {
  MainWrapper,
  ActionsWrapper,
  UploadedImagesWrapper,
  UploadedImage,
  DivUploadImage,
  CloseIconDiv,
  UploadedImg,
} from "./style";

import {setDeleteImageLibrary, setImageLibrary} from "../../../redux/actions/imageLibrary";

function AddPhotoOption() {
  const {boombData, curCubePosition} = useSelector(
    ({boombReducer}) => boombReducer
  );
  const {imageLibrary} = useSelector(({sidebarReducer}) => sidebarReducer);

  const {imageData, imageState} = useSelector(({imageLibraryReducer}) => imageLibraryReducer)

  const dispatch = useDispatch();
  const setImage = (img, id) => () => {
    dispatch(selectUploadedImage(img));
    dispatch(setImageLibrary(id));
    dispatch(setCurrentSidebar({flag: "", state: false}));
  };
  const deleteImage = (id) => {
    dispatch(setDeleteImageLibrary(id))
  }

  return (
    <MainWrapper>
      <ActionsWrapper>
        <ImageUploader/>
        <Buttons/>
      </ActionsWrapper>
      <UploadedImagesWrapper>
        <Switch>
          {/**todo Route temporary solution*/}
          <Route path="/" exact={true}>
            {boombData.map(({ img, position }) => (
              <DivUploadImage>
                <CloseIconDiv>
                  <svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.5999 22.4004L22.3999 41.6004" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.3999 22.4004L41.5999 41.6004" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CloseIconDiv>
                <UploadedImage
                  curCubePosition={curCubePosition}
                  position={position}
                  key={position}
                  onClick={setImage(img)}
                  src={img}
                />
              </DivUploadImage>
            ))}
          </Route>
          <Route path="/cannon" exact={true}>
            {imageData.map(({img, id}, idx) => id ? (
              <DivUploadImage key={'DivUploadImage' + idx}>
                <CloseIconDiv onClick={() => deleteImage(id)}>
                  <svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.5999 22.4004L22.3999 41.6004" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M22.3999 22.4004L41.5999 41.6004" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </CloseIconDiv>
                <UploadedImg
                  activeId={imageState.id}
                  id={id}
                  onClick={setImage(img, id)}
                  src={img}
                />
              </DivUploadImage>
            ) : null)}
          </Route>
        </Switch>
      </UploadedImagesWrapper>
    </MainWrapper>
  );
}

export default AddPhotoOption;
