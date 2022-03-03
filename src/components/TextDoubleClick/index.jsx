import React, {useCallback, useEffect, useState} from 'react';
import {getCenterBox, rotateDegree} from "../../utils/functions/textRotate";
import DraggableText from "./Draggable";
import {openEditor} from "../../utils/functions/boomb";
import {useDispatch} from "react-redux";
import {CenterRotate, FormTextContent} from "./style.js";

const TextDoubleClick = ({textState, textStyles, activeState}) => {
  const [enableRotate, setEnableRotate] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [rotateState, setRotateState] = useState(0);

  const handleCardMove = useCallback((e) => {
    if (!enableRotate) {
      return;
    }

    if (e.type === 'touchmove') {
      setRotateState(rotateDegree(e.touches[0], getCenterBox(document.getElementById("center-rotate"))))

      setCursorPosition(e.touches[0].clientX); //todo
    } else {
      setRotateState(rotateDegree(e, getCenterBox(document.getElementById("center-rotate"))))
      setCursorPosition(e.clientX)
    }
  }, [cursorPosition, enableRotate]);

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
      <DraggableText
        setEnableRotate={setEnableRotate}
        enableRotate={enableRotate}
        rotateState={rotateState}
        activeState={activeState}
        textState={textState}
        textStyles={textStyles}
      />
    </FormTextContent>
  )
};

export default TextDoubleClick;