import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setUpdateTextData} from "../../../../redux/actions/textData";
import {setCurrentSidebar} from "../../../../redux/actions/sideBar";
import {diagonalLine} from "../../../../utils/functions/imageLibrary";

import EditPencilCan from "../../../../utils/assets/svg/EditPencilCan.svg";
import {DiagonalLineOne} from "../../../TextEditor/style";
import {
  AddButton,
  BackgroundImage,
  ImageDiv,
  ImageNotContent,
  PostcardEditButton
} from "./style";

const PostcardImage = () => {
  const [{widthLine, rotateLine}, setLineState] = useState({widthLine: 0, rotateLine: 0});

  const ref = useRef(null);
  const {imageState} = useSelector(
    ({imageLibraryReducer}) => imageLibraryReducer
  );

  const openEditor = () => {
    dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "Image", state: true}}));
  };

  const imageContent = () => {
    dispatch(setCurrentSidebar({flag: "+ Add photo", state: true}));
  }

  useEffect(() => {
    if (ref.current) {
      setLineState(diagonalLine(ref.current.getBoundingClientRect()));
    }
  }, [ref]);

  const dispatch = useDispatch();
  return imageState.url || imageState.img ? (
    <ImageDiv>
      <BackgroundImage
        increaseSize={imageState.size}
        src={imageState.url || imageState.img}
        alt={imageState.alt}
      />
      <PostcardEditButton onClick={openEditor}>
        <img src={EditPencilCan} width={48} height={48} alt="edit"/>
      </PostcardEditButton>
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
  );
};

export default PostcardImage;