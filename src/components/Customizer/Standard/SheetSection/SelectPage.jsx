import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setStandardName} from "../../../../redux/actions/standard";
import {setCurrentModal} from "../../../../redux/actions/modal";

import BlueButton from "../../../Buttons/BlueButton";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import {PostcardButton} from "../../Cannon/PostcardSection/style";
import {ActiveSheetDiv, ColumnActiveSheet} from "./style";
import SheetPageTaDah from "../../TaDah/TaDahSection/SheetPageTaDah";

const SelectPage = ({type}) => {
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
        <SheetPageTaDah type={type}/>
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