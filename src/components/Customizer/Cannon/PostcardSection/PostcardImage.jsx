import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setUpdateTextData} from "../../../../redux/actions/textData";
import {setCurrentSidebar} from "../../../../redux/actions/sideBar";

import EditPencil from "../../../../utils/assets/svg/EditPencil.svg";
import {AddButton, BackgroundImage, ImageDiv, ImageNotContent} from "./style";
import {EditButton, EditIcon} from "../../Boomb/CubeSection/style";

const PostcardImage = () => {
  const dispatch = useDispatch();
  const {imageState} = useSelector(({imageLibraryReducer}) => imageLibraryReducer);

  const openEditor = () => {
    dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "Image", state: true}}))
  };

  const imageContent = () => {
    dispatch(setCurrentSidebar({flag: "+ Add photo", state: true}))
  }

  return (
    <>
      {imageState.img ? (
        <ImageDiv>
          <BackgroundImage src={imageState.img} alt={imageState.alt}/>
          <EditButton onClick={openEditor}>
            <EditIcon src={EditPencil} alt="edit"/>
          </EditButton>
        </ImageDiv>
      ) : (
        <ImageNotContent>
          <AddButton onClick={imageContent}>
            + Add Image
          </AddButton>
        </ImageNotContent>
      )}
    </>
  );
};

export default PostcardImage;