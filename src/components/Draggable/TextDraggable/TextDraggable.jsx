import React from "react";
import Draggable from "react-draggable";
import {useDispatch} from "react-redux";

import {textPosition} from "../../../utils/functions/textData";
import {useAutoResize} from "../../../utils/hooks/useAutoResize";
import {useTextHidden} from "../../../utils/hooks/useTextHidden";

import {setCurRotate} from "../../../redux/actions/boomb";
import {setActionTextData, setDeleteTextData} from "../../../redux/actions/textData";

import LeftAndRightArrows from "../../../utils/assets/svg/LeftAndRightArrows.svg";
import Reboot from "../../../utils/assets/svg/Reboot.svg";
import Trash from "../../../utils/assets/svg/Trash.svg";

import {
  CenterRotate,
  DivTextContent,
  TextEditorForm,
  TextareaDraggable,
} from "./style.js";
import "./style.css";

const TextDraggablePos = ({
  inputRef,
  currentState,
  textEditorParams,
  textState,
  buttonFlag,
  activeId,
  activeRebootImage,
  activeSizeImage,
}) => {
  useAutoResize({
    inputRef: activeId ? inputRef : null,
    valueText: textState,
    currentState,
    textEditorParams,
  });
  useTextHidden({
    buttonFlag,
    currentState,
    activeHooks: !activeRebootImage
  });
  const handleSelectCard = () => {
    dispatch(setActionTextData(currentState.id));
    dispatch(setCurRotate(760));
  };

  const deleteText = () => {
    dispatch(setDeleteTextData(currentState.id));
  };

  const onStart = () => {
    if (!currentState.focusState) {
      return false;
    }
  };

  const onStop = (e, data) => {
    const parentBlock = document.getElementById(buttonFlag);
    const childrenBlock = inputRef.current.getBoundingClientRect();

    textEditorParams.setPosition(
      textPosition(
        parentBlock.getBoundingClientRect(),
        childrenBlock,
        data,
        activeSizeImage ? 1 : 2,
      ));
  };

  const dragHandlers = {
    onStart,
    onStop: onStop,
    onTouchStart: onStop,
    onTouchEnd: onStop,
    axis: "both",
    scale: 1,
    grid: [1, 1],
    position: activeId ? textEditorParams.positionState : currentState.position,
  };

  const dispatch = useDispatch();
  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div
        className="box"
        onClick={handleSelectCard}
        onTouchStart={handleSelectCard}
        style={{zIndex: 2}}
      >
        <TextEditorForm
          style={{
            transform: `rotate(${
              activeId ? textEditorParams.rotateState : currentState.rotate
            }deg)`,
          }}
        >
          <div className="div-reboot-pos">
            <strong className="no-cursor">
              {currentState.focusState && activeRebootImage && (
                <div
                  onMouseDown={textEditorParams.initRotate}
                  onTouchStart={textEditorParams.initRotate}
                >
                  <img src={Reboot} alt="Reboot" height={24} width={24}/>
                </div>
              )}
            </strong>
          </div>
          <div className="div-flex">
            <div className="div-trash-pos">
              <strong className="no-cursor">
                {currentState.focusState && (
                  <div className="image-div-block" onClick={deleteText}>
                    <img src={Trash} alt="TrashCan" height={10} width={10}/>
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
                value={
                  activeId ? textEditorParams.textState : currentState.value
                }
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
