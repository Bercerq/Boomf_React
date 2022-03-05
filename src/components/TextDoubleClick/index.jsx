import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getCenterBox, rotateDegree} from "../../utils/functions/textData";
import DraggableText from "./Draggable";
import {changeTopText, openEditor} from "../../utils/functions/boomb";
import {setActionTextData, setDeleteTextData} from "../../redux/actions/textData";

import {FormTextContent} from "./style.js";
import {PostcardText} from "../Customizer/Cannon/PostcardSection/style";

const TextDoubleClick = ({textState, rotateState, setRotateState, positionState, setPositionState, inputRef, setTextState}) => {
  const [enableRotate, setEnableRotate] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);
  const {textData, textDataState} = useSelector(({textDataReducer}) => textDataReducer);

  const dispatch = useDispatch();
  const refs = useRef({});

  const handleCardMove = useCallback((e) => {
    if (!enableRotate) {
      return;
    }
    if (e.type === 'touchmove') {
      setRotateState(rotateDegree(e.touches[0], getCenterBox(refs.current[textDataState.id], window.scrollY)))
      setCursorPosition(e.touches[0].clientX);
    } else {
      setRotateState(rotateDegree(e, getCenterBox(refs.current[textDataState.id], window.scrollY)))
      setCursorPosition(e.clientX)
    }
  }, [cursorPosition, enableRotate]);

  const deleteText = (id) => {
    dispatch(setDeleteTextData(id))
  }

  useEffect(() => {
    if (enableRotate) {
      window.addEventListener("mousemove", handleCardMove);
      window.addEventListener("touchmove", handleCardMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleCardMove);
      window.removeEventListener("touchmove", handleCardMove);
    }
  }, [enableRotate, handleCardMove]);



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
      {textDataState.focusState && (
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
            deleteText={() => deleteText(e.id)}
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