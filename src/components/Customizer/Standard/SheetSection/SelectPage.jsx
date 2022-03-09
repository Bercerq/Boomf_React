import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActiveSheetDiv, DivFlex, DivSheetContent, FrontSheetDiv} from "./style";
import {setStandardName} from "../../../../redux/actions/standard";

const SelectPage = () => {
  const dispatch = useDispatch();

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  const handleSelect = (name) => {
    dispatch(setStandardName(name));
  }

  return (
    <ActiveSheetDiv>
      <DivSheetContent>
        <FrontSheetDiv
          activeSheet={standardName === 'Front'}
          onClick={() => handleSelect('Front')}
        />
        <h3>Front</h3>
      </DivSheetContent>
      <DivSheetContent>
        <DivFlex
          onClick={() => handleSelect('Inside')}
          activeSheet={standardName === 'Inside'}
        >
          <FrontSheetDiv/>
          <FrontSheetDiv/>
        </DivFlex>
        <h3>Inside pages</h3>
      </DivSheetContent>
    </ActiveSheetDiv>
  );
};

export default SelectPage;