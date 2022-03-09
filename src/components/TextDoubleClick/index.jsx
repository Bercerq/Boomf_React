import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getCenterBox, rotateDegree} from "../../utils/functions/textData";
import DraggableText from "./Draggable";
import {changeTopText} from "../../utils/functions/boomb";
import {setActionTextData, setDeleteTextData, setUpdateTextData} from "../../redux/actions/textData";

import {PostcardText} from "../Customizer/Cannon/PostcardSection/style";
import {useResize} from "../../utils/hooks/useResize";
import useRotate from "../../utils/hooks/useRotate";
import useDebounce from "../../utils/hooks/useDebounce";

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
            rotateState={textDataState.id === e.id ? rotate : e.rotate}
            textStyles={e.textStyles}
            activeState={e.dblClickState}
            activeSizeImage={activeSizeImage}

            handleSelectCard={() => dispatch(setActionTextData(e.id))}
            deleteText={() => deleteText(e.id)}

            refResize={refResize}
            refRotate={refRotate}
            initResize={initResize}
            initRotate={initRotate}
            rotate={rotate}
          />
        </React.Fragment>
      ))}
    </>

  )
};

export default TextDoubleClick;