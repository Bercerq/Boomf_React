import React, {useState} from 'react';
import Draggable from "react-draggable";

import Reboot from '../../utils/assets/svg/Reboot.svg';
import Trash from '../../utils/assets/svg/Trash.svg';
import LeftAndRightArrows from '../../utils/assets/svg/LeftAndRightArrows.svg';


import {CenterRotate, DivTextContent} from "./style.js";
import './style.css';

const DraggableText = ({
  textState,
  position,
  rotateState,
  textStyles,
  activeState,

  setEnableRotate,
  setEnableWidthText,
  setPositionState,
  deleteText,
  uid,
  handleSelectCard,
  refs,
  activeSizeImage
}) => {
  const [, setActiveDrags] = useState(0);

  const onStart = (e) => {
    if (!activeState) {
      return false;
    }
    setActiveDrags(e => ++e)
  };

  const onStop = (e, data) => {
    setPositionState({x: data.lastX, y: data.lastY});
    setActiveDrags(e => --e);
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
        <div className='text-editor-form' style={{transform: `rotate(${rotateState}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className="no-cursor">
              {activeState && (
                <div style={{cursor: 'col-resize'}}
                     onMouseDown={() => setEnableRotate(true)}
                     onTouchStart={() => {
                       setEnableRotate(true);
                       document.body.style.overflow = 'hidden';
                     }}
                >
                  <img src={Reboot} height={24} width={24} alt='Reboot'/>
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
                    <img src={Trash} height={10} width={10} alt='TrashCan'/>
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent
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
                       onMouseDown={() => setEnableWidthText(true)}
                       onTouchStart={() => {
                         setEnableWidthText(true);
                         document.body.style.overflow = 'hidden';
                       }}
                  >
                    <img src={LeftAndRightArrows} height={10} width={10} alt="LeftAndRightArrows"/>
                  </div>
                )}
              </strong>
            </div>
          </div>
        </div>
        <CenterRotate ref={r => refs.current[uid] = r}/>
      </div>
    </Draggable>
  )
};

export default DraggableText;