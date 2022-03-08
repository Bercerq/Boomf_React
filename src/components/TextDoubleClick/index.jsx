import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getCenterBox, rotateDegree} from "../../utils/functions/textData";
import DraggableText from "./Draggable";
import {changeTopText} from "../../utils/functions/boomb";
import {setActionTextData, setDeleteTextData} from "../../redux/actions/textData";

import {PostcardText} from "../Customizer/Cannon/PostcardSection/style";

const TextDoubleClick = ({
 textState,
 rotateState,
 setRotateState,
 positionState,
 setPositionState,
 inputRef,
 setTextState,

 cursorPosition,
 setCursorPosition,

 enableRotate,
 setEnableRotate,
 enableWidthText,
 setEnableWidthText,

 column,
 activeSizeImage
}) => {
  const {textData, textDataState} = useSelector(({textDataReducer}) => textDataReducer);

  const refs = useRef({});

  const dispatch = useDispatch();

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

  const handleWidthCard = useCallback((e) => {
    if(!enableWidthText) {
      return;
    }
    if(e.type === 'touchmove') {
      // todo Take the click coordinate and track changes from it
    }
  }, [])

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
            rotateState={textDataState.id === e.id ? rotateState : e.rotate}
            textStyles={e.textStyles}
            activeState={e.dblClickState}
            uid={e.id}

            activeSizeImage={activeSizeImage}
            setEnableRotate={setEnableRotate}
            setEnableWidthText={setEnableWidthText}

            handleSelectCard={() => dispatch(setActionTextData(e.id))}

            deleteText={() => deleteText(e.id)}

            refs={refs}
          />
        </React.Fragment>
      ))}
    </>

  )
};

export default TextDoubleClick;