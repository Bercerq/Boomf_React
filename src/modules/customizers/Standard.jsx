import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";

import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import Sheet from "../../components/Customizer/Standard/Sheet";

import {setStandardName} from "../../redux/actions/standard";

const Standard = () => {
  const dispatch = useDispatch();
  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setStandardName("Front"));
  }, [dispatch]);

  return (
    <CustomizerLayout
      productType={"greeting_card"}
      editTextRef={editTextRef}
      title="Standard"
    >
      <Sheet editTextRef={editTextRef}/>
    </CustomizerLayout>
  );
};

export default Standard;
