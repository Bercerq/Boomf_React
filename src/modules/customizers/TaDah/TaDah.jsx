import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setStandardName} from "../../../redux/actions/standard";
import {setConfettiData} from "../../../redux/actions/confetti";

import CustomizerLayout from "../../../components/Layout/CustomizerLayout";
import TaDahSheet from "../../../components/Customizer/TaDah/TaDahSheet";
import ConfettiTaDah from "../../../components/Confetti/TaDah";

import {TitleTaDah} from "../../../components/Customizer/TaDah/TaDahSection/style";

const TaDahComponent = ({imageData, title, type}) => {
  const dispatch = useDispatch();
  const editTextRef = useRef([]);

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  useEffect(() => {
    if(imageData) {
      dispatch(setStandardName("Front"));
      dispatch(setConfettiData(imageData));
    }
  }, [dispatch, imageData]);

  return (
    <CustomizerLayout
      productType=""
      editTextRef={editTextRef}
      title={title}
    >
      <TitleTaDah>
        {standardName} Page
      </TitleTaDah>
      <TaDahSheet
        editTextRef={editTextRef}
        standardName={standardName}
        type={type}
      />
      <ConfettiTaDah
        title={title}
        standardName={standardName}
      />
    </CustomizerLayout>
  );
};

export default TaDahComponent;