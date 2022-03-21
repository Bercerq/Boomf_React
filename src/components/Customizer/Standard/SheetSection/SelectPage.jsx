import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  ActiveSheetDiv,
  ColumnActiveSheet,
  DivFlex,
  DivSheetContent,
  FrontDblSheet,
  FrontSheetDiv,
  LineDivStandard
} from "./style";
import {setStandardName} from "../../../../redux/actions/standard";
import {PostcardButton} from "../../Cannon/PostcardSection/style";
import BlueButton from "../../../Buttons/BlueButton";
import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";
import {setCurrentModal} from "../../../../redux/actions/modal";

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
          <h3>Front</h3>
        </DivSheetContent>
        <DivSheetContent>
          <DivFlex
            onClick={() => handleSelect('Inside')}
            activeSheet={standardName === 'Inside'}
          >
            <FrontDblSheet>
              <LineDivStandard />
            </FrontDblSheet>
          </DivFlex>
          <h3>Inside pages</h3>
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