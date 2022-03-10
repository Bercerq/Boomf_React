import React from 'react';
import Draggable from "react-draggable";

import Reboot from '../../utils/assets/svg/Reboot.svg';
import Trash from '../../utils/assets/svg/Trash.svg';
import LeftAndRightArrows from '../../utils/assets/svg/LeftAndRightArrows.svg';

import {CenterRotate, DivTextContent} from "./style.js";
import './style.css';

const DraggableText = ({
                         textState,
                         position,
                         setPositionState,
                         textStyles,
                         activeState,


                         deleteText,
                         handleSelectCard,
                         activeSizeImage,

                         refResize,
                         refRotate,
                         initResize,
                         initRotate,
                         rotate
                       }) => {


  const onStart = (e) => {
    if (!activeState) {
      return false;
    }
  };

  const onStop = (e, data) => {
    setPositionState({x: data.lastX, y: data.lastY});
  };

  const dragHandlers = {
    onStart,
    onStop: onStop,
    onTouchEnd: onStop,
    axis: "both",
    scale: 1,
    grid: [15, 15],
    position: position ? position : {x: 0, y: 0},
  };

  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div className="box" onClick={handleSelectCard} style={{position: 'absolute', zIndex: activeState ? 1 : 0}}>
        <div className='text-editor-form' style={{transform: `rotate(${rotate}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className="no-cursor">
              {activeState && (
                <div style={{cursor: 'col-resize'}}
                     onMouseDown={initRotate}
                     onTouchStart={initRotate}
                >
                  <img src={Reboot} alt='Reboot' height={24} width={24}/>
                </div>
              )}
            </strong>
          </div>
          <div className='div-flex'>
            <div className='div-trash-pos'>
              <strong className="no-cursor">
                {activeState && (
                  <div className='image-div-block'
                       style={{cursor: 'pointer'}}
                       onClick={deleteText}
                  >
                    <img src={Trash} alt='TrashCan' height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent
              ref={refResize}
              activeState={activeState}
              textStyles={textStyles ? textStyles : {}}
            >
              {!textState ? ('Double Click to type your text') : (textState)}
            </DivTextContent>
            <div className='text-editor-form'>
              <strong className="no-cursor">
                {activeState && activeSizeImage && (
                  <div className='image-div-block div-size-icon'
                       style={{cursor: 'col-resize'}}
                       onMouseDown={initResize}
                       onTouchStart={initResize}
                  >
                    <img src={LeftAndRightArrows} alt="LeftAndRightArrows" height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
          </div>
        </div>
        <CenterRotate ref={refRotate}/>
      </div>
    </Draggable>
  )
};

export default DraggableText;