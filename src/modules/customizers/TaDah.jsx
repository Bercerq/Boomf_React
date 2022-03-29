import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import TaDahSheet from "../../components/Customizer/TaDah/TaDahSheet";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import ConfettiTaDah from "../../components/Confetti/TaDah";
import {setStandardName} from "../../redux/actions/standard";
import {setConfettiData} from "../../redux/actions/confetti";
import {confettiDataCannon} from "../../utils/constants/ConfettiData";

import {TitleTaDah} from "../../components/Customizer/TaDah/TaDahSection/style";

const TaDah = () => {
  const dispatch = useDispatch();
  const editTextRef = useRef([]);
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  useEffect(() => {
    dispatch(setStandardName("Front"));
    dispatch(setConfettiData([...confettiDataCannon, ...confettiDataCannon, ...confettiDataCannon]));
  }, [dispatch]);

  return (
    <CustomizerLayout
      productType={""}
      editTextRef={editTextRef}
      title="Ta Dah"
    >
      <TitleTaDah>
        {standardName} Page
      </TitleTaDah>
      <TaDahSheet
        editTextRef={editTextRef}
        standardName={standardName}
      />
      <ConfettiTaDah/>
    </CustomizerLayout>
  );
};

export default TaDah;