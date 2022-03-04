import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getCenterBox, rotateDegree} from "../../utils/functions/textData";
import DraggableText from "./Draggable";
import {openEditor} from "../../utils/functions/boomb";
import {setActionTextData, setDeleteTextData} from "../../redux/actions/textData";

import {FormTextContent} from "./style.js";

const TextDoubleClick = ({textState, rotateState, setRotateState, positionState, setPositionState}) => {
  const [enableRotate, setEnableRotate] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);
  const {textData, textDataState} = useSelector(({textDataReducer}) => textDataReducer)

  const refs = useRef({});

  const handleCardMove = useCallback((e) => {
    if (!enableRotate) {
      return;
    }
    if (e.type === 'touchmove') {
      setRotateState(rotateDegree(e.touches[0], getCenterBox(refs.current[textDataState.id])))
      setCursorPosition(e.touches[0].clientX);
    } else {
      setRotateState(rotateDegree(e, getCenterBox(refs.current[textDataState.id])))
      setCursorPosition(e.clientX)
    }
  }, [cursorPosition, enableRotate]);

  const deleteText = () => {
    dispatch(setDeleteTextData())
  }

  useEffect(() => {
    if (enableRotate) {
      window.addEventListener("mousemove", handleCardMove);
      window.addEventListener("touchmove", handleCardMove);
    } else {
      window.removeEventListener("mousemove", handleCardMove);
      window.removeEventListener("touchmove", handleCardMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleCardMove);
      window.removeEventListener("touchmove", handleCardMove);
    }
  }, [enableRotate, handleCardMove]);

  const dispatch = useDispatch();

  return (
    <FormTextContent
      id="buttonClickCannon"
      onClick={openEditor(dispatch, "buttonClickCannon")}
      onMouseUp={() => {
        setEnableRotate(false);
      }}
      onTouchEnd={() => {
        setEnableRotate(false);
        document.body.style.overflow = 'auto';
      }}
    >
      {textData.map((e, idx) => (
        <React.Fragment key={'DraggableText' + idx}>
          <DraggableText
            textState={textDataState.id === e.id ? textState : e.value}
            position={textDataState.id === e.id ? positionState : e.position}
            rotateState={textDataState.id === e.id ? rotateState : e.rotate}
            textStyles={e.textStyles}
            activeState={e.dblClickState}
            setEnableRotate={setEnableRotate}
            setPositionState={setPositionState}
            deleteText={() => deleteText}
            handleSelectCard={() => dispatch(setActionTextData(e.id))}

            uid={e.id}
            refs={refs}
          />
        </React.Fragment>
      ))}
    </FormTextContent>
  )
};

export default TextDoubleClick;