import React, {useState} from 'react';
import Draggable from "react-draggable";
import RebootSvg from "../../utils/assets/svg/Reboot.svg";
import TrashCan from "../../utils/assets/svg/TrashCan.svg";
import {DivTextContent} from "./style.js";

import './style.css';

const DraggableText = ({textState, setEnableRotate, rotateState, activeState, textStyles}) => {
  const [, setActiveDrags] = useState(0);

  const onStart = (e) => {
    if (!activeState) {
      return false
    }
    setActiveDrags(e => ++e)
  };

  const onStop = (e) => {
    setActiveDrags(e => --e);
  };

  const dragHandlers = {
    onStart,
    onStop,
    axis: "both",
    scale: 1,
    grid: [15, 15],
    position: null,
    defaultPosition: {x: 0, y: 0}
  };

  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div className="box">
        <div className='text-editor-form' style={{transform: `rotate(${rotateState}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className="no-cursor">
              {activeState && (
                <div className='image-div-block'
                     style={{cursor: 'col-resize'}}
                     onMouseDown={() => {
                       setEnableRotate(true);
                     }}
                     onTouchStart={() => {
                       setEnableRotate(true);
                       document.body.style.overflow = 'hidden';
                     }}
                >
                  <img src={RebootSvg} height={10} width={10} alt='Reboot'/>
                </div>
              )}
            </strong>
          </div>
          <div className='div-flex' id='center-rotate'>
            <div className='div-trash-pos'>
              <strong className="no-cursor">
                {activeState && (
                  <div className='image-div-block'>
                    <img src={TrashCan} height={10} width={10} alt='TrashCan'/>
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent
              style={activeState ? {cursor: 'all-scroll', border: '2px solid #0A74FF'} : {}}
              textStyles={textStyles}
            >
              {!textState ? ('Double Click to type your text') : (textState)}
            </DivTextContent>
          </div>
        </div>
      </div>
    </Draggable>
  )
};

export default DraggableText;