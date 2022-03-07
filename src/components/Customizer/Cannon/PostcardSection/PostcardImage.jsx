import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setUpdateTextData} from "../../../../redux/actions/textData";
import {setCurrentSidebar} from "../../../../redux/actions/sideBar";

import EditPencil from "../../../../utils/assets/svg/EditPencil.svg";
import {AddButton, BackgroundImage, ImageDiv, ImageNotContent} from "./style";
import {EditButton, EditIcon} from "../../Boomb/CubeSection/style";
import {diagonalLine} from "../../../../utils/functions/imageLibrary";
import {DiagonalLineOne} from "../../../TextEditor/style";

const PostcardImage = () => {
  const [{widthLine, rotateLine}, setLineState] = useState({widthLine: 0, rotateLine: 0});

  const ref = useRef(null);
  const dispatch = useDispatch();

  const {imageState} = useSelector(({imageLibraryReducer}) => imageLibraryReducer);

  const openEditor = () => {
    dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "Image", state: true}}))
  };

  const imageContent = () => {
    dispatch(setCurrentSidebar({flag: "+ Add photo", state: true}))
  }

  useEffect(() => {
    if(ref.current) {
      setLineState(diagonalLine(ref.current.getBoundingClientRect()));
    }
  }, [ref]);

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
        <ImageNotContent ref={ref}>
          <AddButton onClick={imageContent}>
            + Add Image
          </AddButton>
          <DiagonalLineOne
            widthLine={widthLine}
            rotateLine={rotateLine}
            originLine={true}
          />
          <DiagonalLineOne
            widthLine={widthLine}
            rotateLine={-rotateLine}
            originLine={false}
          />
        </ImageNotContent>
      )}
    </>
  );
};

export default PostcardImage;