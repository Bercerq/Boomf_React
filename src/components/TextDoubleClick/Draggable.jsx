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
  TextareaDraggable
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
      <div className="box"
           onClick={handleSelectCard}
           onTouchStart={handleSelectCard}
           style={{zIndex: 2}}>
        <div className='text-editor-form'
             style={{transform: `rotate(${activeId ? textEditorParams.rotateState : currentState.rotate}deg)`}}>
          <div className='no-cursor div-reboot-pos'>
            <strong>
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
            <div className='no-cursor div-trash-pos'>
              <strong>
                {currentState.focusState && (
                  <div className='image-div-block' onClick={deleteText}>
                    <img src={Trash} alt='TrashCan' height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent ref={activeId ? textEditorParams.refResize : null} activeState={currentState.focusState}>
              <TextareaDraggable onChange={textEditorParams.setTextState}
                                 value={activeId ? textEditorParams.textState : currentState.value}
                                 textStyles={currentState.textStyles}
                                 disabled={!activeId}
                                 ref={activeId ? inputRef : null}
                                 placeholder={'Click To Type Or Edit Your Text'}/>
            </DivTextContent>
            <div className='no-cursor text-editor-form'>
              <strong>
                {currentState.focusState && activeSizeImage && (
                  <div className='image-div-block div-size-icon'
                       onMouseDown={textEditorParams.initResize}
                       onTouchStart={textEditorParams.initResize}>
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