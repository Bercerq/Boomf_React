import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setStandardName} from "../../../../redux/actions/standard";
import {setCurrentModal} from "../../../../redux/actions/modal";

import BlueButton from "../../../Buttons/BlueButton";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import {PostcardButton} from "../../Cannon/PostcardSection/style";
import {ActiveSheetDiv, ColumnActiveSheet} from "./style";

const SelectPage = ({children}) => {
  const dispatch = useDispatch();

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

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
        {children}
      </ActiveSheetDiv>
      <PostcardButton widthSheet={true}>
        <BlueButton handleButtonClick={handleButtonClick} fontFamily={'normal none 400 16px 170% "Objectivity"'}>
          {standardName === 'Front' ? ('Inside pages') : ('Add to cart')} <img src={ArrowRightIcon} alt="add"/>
        </BlueButton>
      </PostcardButton>
    </ColumnActiveSheet>
  );
};

export default SelectPage;