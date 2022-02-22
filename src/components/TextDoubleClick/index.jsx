import React, {useState} from 'react';
import Draggable from "react-draggable";
import RebootSvg from "../../utils/assets/svg/Reboot.svg";
import TrashCan from "../../utils/assets/svg/TrashCan.svg";

import './style.css';
import {onMouseDownText, onMouseUpText, onTestGlob} from "../../utils/functions/textRotate";

const TextDoubleClick = ({textState, setEnableRotate, enableRotate}) => {
  const [rotateState, setRotateState] = useState(10);
  const [activeDrags, setActiveDrags] = useState(0);

  const onStart = () => {
    setActiveDrags(e => ++e)
  };

  const onStop = () => {
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

  console.log('enableRotate', enableRotate)

  return (
    <Draggable cancel="strong" {...dragHandlers}>
      <div className="box">
        <div className='text-editor-form' style={{transform: `rotate(${rotateState}deg)`}}>
          <div className='div-reboot-pos'>
            <strong className="no-cursor">
              <div className='image-div-block' id='text-rotate'
                   onMouseDown={() => {

                     // onTestGlob(drag, d, con)
                     setEnableRotate(true)
                   }}
              >
                <img src={RebootSvg} height={10} width={10} alt='Reboot'/>
              </div>
            </strong>
          </div>
          <div className='div-flex'>
            <div className='div-trash-pos'>
              <strong className="no-cursor">
                <div className='image-div-block'>
                  <img src={TrashCan} height={10} width={10} alt='TrashCan'/>
                </div>
              </strong>
            </div>
            <div className='div-text-content'>
              {!textState ? ('Double Click to type your text') : (textState)}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
};

export default TextDoubleClick;