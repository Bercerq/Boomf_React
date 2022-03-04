import React, {useState} from 'react';
import Draggable from "react-draggable";

import Reboot from '../../utils/assets/svg/Reboot.svg';
import TrashCan from '../../utils/assets/svg/TrashCan.svg';

import {textPosition} from "../../utils/functions/textData";

import {CenterRotate, DivTextContent} from "./style.js";
import './style.css';

const DraggableText = ({
 textState,
 position,
 rotateState,
 textStyles,
 activeState,

 setEnableRotate,
 setPositionState,
 deleteText,
 uid,
 handleSelectCard,
 refs
}) => {
  const [, setActiveDrags] = useState(0);

  const onStart = (e) => {
    if (!activeState) {
      return false;
    }
    setActiveDrags(e => ++e)
  };

  const onStop = (e, data) => {
    const documentElement = document.documentElement
    const wrapperHeight = (window.innerHeight || documentElement.clientHeight)
    const wrapperWidth = (window.innerWidth || documentElement.clientWidth)

    setPositionState(textPosition(data, wrapperHeight, wrapperWidth))
    setActiveDrags(e => --e);
  };

  const dragHandlers = {
    onStart,
    onStop,
    axis: "both",
    scale: 1,
    grid: [15, 15],
    position: null,
    defaultPosition: position ? position : {x: 0, y: 0}
  };

  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div className="box" onClick={handleSelectCard} style={{position: 'absolute'}}>
        <div className='text-editor-form' style={{transform: `rotate(${rotateState}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className="no-cursor">
              {activeState && (
                <div
                  style={{cursor: 'col-resize'}}
                  className='image-div-block'
                  onMouseDown={() => setEnableRotate(true)}
                  onTouchStart={() => {
                    setEnableRotate(true);
                    document.body.style.overflow = 'hidden';
                  }}
                >
                  <img src={Reboot} height={10} width={10} alt='Reboot'/>
                </div>
              )}
            </strong>
          </div>
          <div className='div-flex'>
            <div className='div-trash-pos'>
              <strong className="no-cursor">
                {activeState && (
                  <div
                    style={{cursor: 'pointer'}}
                    className='image-div-block'
                    onClick={deleteText}
                  >
                    <img src={TrashCan} height={10} width={10} alt='TrashCan'/>
                  </div>
                )}
              </strong>
            </div>
            <DivTextContent
              style={activeState ? ({
                cursor: 'all-scroll', border: '2px solid #0A74FF'
              }) : {}}
              textStyles={textStyles ? textStyles : {}}
            >
              {!textState ? ('Double Click to type your text') : (textState)}
            </DivTextContent>
          </div>
        </div>
        <CenterRotate ref={r => refs.current[uid] = r}/>
      </div>
    </Draggable>
  )
};

export default DraggableText;