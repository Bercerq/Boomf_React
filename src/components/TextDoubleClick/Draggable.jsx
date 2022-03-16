import React from 'react';
import Draggable from "react-draggable";
import {useDispatch} from "react-redux";

import Reboot from '../../utils/assets/svg/Reboot.svg';
import Trash from '../../utils/assets/svg/Trash.svg';
import LeftAndRightArrows from '../../utils/assets/svg/LeftAndRightArrows.svg';

import {useAutoResize} from "../../utils/hooks/useAutoResize";
import {setActionTextData, setDeleteTextData} from "../../redux/actions/textData";

import {
  CenterRotate,
  DivTextContent,
  TestText
} from "./style.js";
import './style.css';

const DraggableText = ({currentState, inputRef, activeId, textEditorParams, activeSizeImage, textState}) => {
  useAutoResize({
    inputRef: activeId ? inputRef : null,
    valueText: textState,
    active: currentState.value,
  });

  const handleSelectCard = () => {
    dispatch(setActionTextData(currentState.id));
  }

  const deleteText = () => {
    dispatch(setDeleteTextData(currentState.id));
  }

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
    onTouchEnd: onStop,
    axis: "both",
    scale: 1,
    grid: [15, 15],
    position: activeId ? textEditorParams.position : currentState.position,
  };

  const dispatch = useDispatch();
  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div className="box" onClick={handleSelectCard} onTouchStart={handleSelectCard}
           style={{position: 'absolute', zIndex: currentState.focusState ? 1 : 0}}>
        <div className='text-editor-form' style={{transform: `rotate(${activeId ? textEditorParams.rotateState : currentState.rotate}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className="no-cursor">
              {currentState.focusState && (
                <div onMouseDown={textEditorParams.initRotate}
                     onTouchStart={textEditorParams.initRotate}
                     style={{cursor: 'col-resize'}}>
                  <img src={Reboot} alt='Reboot' height={24} width={24}/>
                </div>
              )}
            </strong>
          </div>
          <div className='div-flex'>
            <div className='div-trash-pos'>
              <strong className="no-cursor">
                {currentState.focusState && (
                  <div className='image-div-block'
                       onClick={deleteText}
                       style={{cursor: 'pointer'}}>
                    <img src={Trash} alt='TrashCan' height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent ref={activeId ? textEditorParams.refResize : null} activeState={currentState.focusState}>
              <TestText onChange={textEditorParams.setTextState}
                value={activeId ? textEditorParams.textState : currentState.value}
                textStyles={currentState.textStyles}
                disabled={!activeId}
                ref={activeId ? inputRef : null}
                placeholder={!((activeId && textEditorParams.textState) || currentState.value) && 'Double Click to type your text'}
              />
            </DivTextContent>
            <div className='text-editor-form'>
              <strong className="no-cursor">
                {currentState.focusState && activeSizeImage && (
                  <div className='image-div-block div-size-icon'
                       onMouseDown={textEditorParams.initResize}
                       onTouchStart={textEditorParams.initResize}
                       style={{cursor: 'col-resize'}}>
                    <img src={LeftAndRightArrows} alt="LeftAndRightArrows" height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
          </div>
        </div>
        <CenterRotate ref={activeId ? textEditorParams.refRotate : null}/>
      </div>
    </Draggable>
  )
};

export default DraggableText;