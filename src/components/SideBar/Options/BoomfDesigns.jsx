import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {activeCollectionData, collectionData} from "../../../utils/constants/ConfettiData";
import {setAddImageLibrary} from "../../../redux/actions/imageLibrary";
import {setCurrentSidebar} from "../../../redux/actions/sideBar";

import MicrophoneIcon from '../../../utils/assets/svg/MicrophoneIcon.svg';
import Search from '../../../utils/assets/svg/Search.svg';

import {
  DivContainerMicro,
  DivMicroIcon,
  DivSearchIcon,
  DivUploadImage,
  InputFilterImage,
  UploadedImg,
  DivCollectionImage,
  TitleCollection
} from "./style";

const BoomfDesigns = () => {
  const [collectionState, setCollectionState] = useState([]);
  const [activeCollection, setActiveCollection] = useState([]);
  const [collectionName, setCollectionName] = useState(null);

  const dispatch = useDispatch();

  const addImage = ({img, alt}) => {
    dispatch(setCurrentSidebar({ flag: "", state: false }));
    dispatch(setAddImageLibrary({img, alt}))
  }

  useEffect(() => {
    setCollectionState(collectionData)
  }, [])

  useEffect(() => {
    if (collectionName) {
      setActiveCollection(activeCollectionData)
    }
  }, [collectionName])

  return (
    <div>
      <DivContainerMicro>
        <DivSearchIcon>
          <img src={Search} alt="Search"/>
        </DivSearchIcon>
        <InputFilterImage
          type="text"
          placeholder='Search for designs...'
          maxLength={50}
        />
        <DivMicroIcon>
          <img src={MicrophoneIcon} alt="MicrophoneIcon"/>
        </DivMicroIcon>
      </DivContainerMicro>
      <DivCollectionImage>
        {collectionName ? (activeCollection.map((e, idx) => (
          <div style={{textAlign: 'center'}} key={'DivUploadImage' + idx}>
            <DivUploadImage>
              <UploadedImg
                activeId={0}
                id={e.id}
                onClick={() => addImage(e)}
                src={e.img}
                alt={e.alt}
              />
            </DivUploadImage>
          </div>
          ))) : (collectionState.map((e, idx) => (
          <div style={{textAlign: 'center'}} key={'DivUploadImage' + idx}>
            <DivUploadImage>
              <UploadedImg
                activeId={0}
                id={e.id}
                onClick={() => setCollectionName(e.alt)}
                src={e.img}
                alt={e.alt}
              />
            </DivUploadImage>
            <TitleCollection>
              {e.alt}
            </TitleCollection>
          </div>
        )))}
      </DivCollectionImage>
    </div>

  );
};

export default BoomfDesigns;