import React from 'react';
import Draggable from "react-draggable";
import {useDispatch} from "react-redux";

import {useAutoResize} from "../../../utils/hooks/useAutoResize";
import {setActionTextData, setDeleteTextData} from "../../../redux/actions/textData";

import Reboot from "../../../utils/assets/svg/Reboot.svg";
import Trash from "../../../utils/assets/svg/Trash.svg";
import LeftAndRightArrows from "../../../utils/assets/svg/LeftAndRightArrows.svg";
import { setCurRotate } from "../../../redux/actions/boomb";

import {
  CenterRotate,
  DivTextContent,
  TextareaDraggable,
  TextEditorForm
} from "./style.js";
import "./style.css";

const TextDraggablePos = ({currentState, inputRef, activeId, textEditorParams, activeSizeImage, textState}) => {
  useAutoResize({
    inputRef: activeId ? inputRef : null,
    valueText: textState,
    currentState,
    textEditorParams
  });

  const handleSelectCard = () => {
    dispatch(setActionTextData(currentState.id));
    dispatch(setCurRotate(760));
  };

  const deleteText = () => {
    dispatch(setDeleteTextData(currentState.id));
  };

  const onStart = (e) => {
    if (!currentState.focusState) {
      return false;
    }
  };

  const onStop = (e, data) => {
    textEditorParams.setPosition({x: data.lastX, y: data.lastY});
  };

  const dragHandlers = {
    onStart,
    onStop: onStop,
    onTouchStart: onStop,
    onTouchEnd: onStop,
    axis: "both",
    scale: 1,
    grid: [1, 1],
    position: activeId ? textEditorParams.position : currentState.position,
  };

  const dispatch = useDispatch();
  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div className="box" onClick={handleSelectCard} onTouchStart={handleSelectCard} style={{zIndex: 2}}>
        <TextEditorForm style={{transform: `rotate(${activeId ? textEditorParams.rotateState : currentState.rotate}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className='no-cursor'>
              {currentState.focusState && (
                <div onMouseDown={textEditorParams.initRotate} onTouchStart={textEditorParams.initRotate}>
                  <img src={Reboot} alt='Reboot' height={24} width={24}/>
                </div>
              )}
            </strong>
          </div>
          <div className="div-flex">
            <div className="div-trash-pos">
              <strong className="no-cursor">
                {currentState.focusState && (
                  <div className="image-div-block" onClick={deleteText}>
                    <img src={Trash} alt="TrashCan" height={10} width={10} />
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent
              ref={activeId ? textEditorParams.refResize : null}
              activeState={currentState.focusState}
            >
              <TextareaDraggable
                onChange={textEditorParams.setTextState}
                value={activeId ? textEditorParams.textState : currentState.value}
                textStyles={currentState.textStyles}
                disabled={!activeId}
                ref={activeId ? inputRef : null}
                placeholder={"Click To Type Or Edit Your Text"}
              />
            </DivTextContent>
            <div className="image-resize">
              <strong className="no-cursor">
                {currentState.focusState && activeSizeImage && (
                  <div
                    className="image-div-block div-size-icon"
                    onMouseDown={textEditorParams.initResize}
                    onTouchStart={textEditorParams.initResize}
                  >
                    <img
                      src={LeftAndRightArrows}
                      alt="LeftAndRightArrows"
                      height={10}
                      width={10}
                    />
                  </div>
                )}
              </strong>
            </div>
          </div>
        </TextEditorForm>
        <CenterRotate ref={activeId ? textEditorParams.refRotate : null}/>
      </div>
    </Draggable>
  );
};

export default TextDraggablePos;