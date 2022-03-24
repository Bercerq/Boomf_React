import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setStandardName} from "../../../../redux/actions/standard";
import {setCurrentModal} from "../../../../redux/actions/modal";

import BlueButton from "../../../Buttons/BlueButton";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import {PostcardButton} from "../../Cannon/PostcardSection/style";
import {
  ActiveSheetDiv,
  ColumnActiveSheet,
  DivFlex,
  DivSheetContent,
  FrontDblSheet,
  FrontSheetDiv,
  LineDivStandard, TitleNameSheet
} from "./style";

const SelectPage = () => {
  const dispatch = useDispatch();

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  const handleSelect = (name) => {
    dispatch(setStandardName(name));
  }

  const handleButtonClick = () => {
    if (standardName === 'Front') {
      dispatch(setStandardName('Inside'))
    } else {
      dispatch(setCurrentModal({title: "Add to cart", state: true}));
    }
  };

  return (
    <ColumnActiveSheet>
      <ActiveSheetDiv>
        <DivSheetContent>
          <FrontSheetDiv
            activeSheet={standardName === 'Front'}
            onClick={() => handleSelect('Front')}
          />
          <TitleNameSheet>Front</TitleNameSheet>
        </DivSheetContent>
        <DivSheetContent>
          <DivFlex
            onClick={() => handleSelect('Inside')}
            activeSheet={standardName === 'Inside'}
          >
            <FrontDblSheet>
              <LineDivStandard zIndexPos={true}/>
            </FrontDblSheet>
          </DivFlex>
          <TitleNameSheet>Inside pages</TitleNameSheet>
        </DivSheetContent>
      </ActiveSheetDiv>


      <PostcardButton widthSheet={true}>
        <BlueButton handleButtonClick={handleButtonClick}>
          {standardName === 'Front' ? ('Inside pages') : ('Add to cart')} <img src={ArrowRightIcon} alt="add"/>
        </BlueButton>
      </PostcardButton>
    </ColumnActiveSheet>
  );
};

export default SelectPage;