import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import EditPencil from "../../../../utils/assets/svg/EditPencil.svg";

import {AddButton, BackgroundImage, ImageDiv, ImageNotContent} from "./style";
import {EditButton, EditIcon} from "../../Boomb/CubeSection/style";
import {setImageContent} from "../../../../utils/functions/cannon";
import {setCurrentEditor} from "../../../../redux/actions/textEditor";
import imageLibraryReducer from "../../../../redux/reducers/imageLibrary";

const PostcardImage = () => {
  const dispatch = useDispatch();
  const {imageState} = useSelector(({imageLibraryReducer}) => imageLibraryReducer);

  const openEditor = () => {
    dispatch(setCurrentEditor({flag: "Image", state: true}));
  };

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
          <AddButton onClick={() => setImageContent(dispatch)}>
            + Add Image
          </AddButton>
        </ImageNotContent>
      )}
    </>
  );
};

export default PostcardImage;