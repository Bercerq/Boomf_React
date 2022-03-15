import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import DraggableText from "./Draggable";
import {changeTopText} from "../../utils/functions/boomb";
import {setActionTextData, setDeleteTextData} from "../../redux/actions/textData";

import {PostcardText} from "../Customizer/Cannon/PostcardSection/style";

const TextDoubleClick = ({
 textState,
 positionState,
 setPositionState,
 inputRef,
 setTextState,
 column,
 activeSizeImage,
 refResize,
 refRotate,
 initResize,
 initRotate,
 rotate
}) => {
  const {textData, textDataState} = useSelector(({textDataReducer}) => textDataReducer);

  const dispatch = useDispatch();

  const deleteText = (id) => {
    dispatch(setDeleteTextData(id))
  }

  return (
    <>
      {textDataState.focusState && textDataState.column === column && (
        <PostcardText
          focusState={textDataState.focusState}
          ref={inputRef}
          textStyles={textDataState.textStyles}
          onChange={(e) => changeTopText(setTextState, e)}
          type="text"
          value={textState}
          resize="none"
          readOnly={!textDataState.focusState}
        />
      )}
      {textData.map((e, idx) => e.column === column && (
        <React.Fragment key={'DraggableText' + idx}>
          <DraggableText
            textState={textDataState.id === e.id ? textState : e.value}
            position={textDataState.id === e.id ? positionState : e.position}
            setPositionState={setPositionState}
            rotate={textDataState.id === e.id ? rotate : e.rotate}
            textStyles={e.textStyles}
            //todo dblclick
            activeState={e.focusState}
            activeSizeImage={activeSizeImage}

            handleSelectCard={() => dispatch(setActionTextData(e.id))}
            deleteText={() => deleteText(e.id)}

            refResize={refResize}
            refRotate={refRotate}
            initResize={initResize}
            initRotate={initRotate}
          />
        </React.Fragment>
      ))}
    </>

  )
};

export default TextDoubleClick;