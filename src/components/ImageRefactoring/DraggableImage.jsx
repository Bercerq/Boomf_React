import React from 'react';
import Draggable from "react-draggable";
import {useDispatch} from "react-redux";

import {setActionTextData, setDeleteTextData} from "../../redux/actions/textData";

import Reboot from "../../utils/assets/svg/Reboot.svg";
import Trash from "../../utils/assets/svg/Trash.svg";
import LeftAndRightArrows from "../../utils/assets/svg/LeftAndRightArrows.svg";

import {CenterRotate} from "../TextDoubleClick/style";
import {ImageBlock} from "./style";
import './style.css';

const DraggableImage = ({currentState, textEditorParams, activeId}) => {
  const handleSelectImage = () => {
    dispatch(setActionTextData(currentState.id));
  }

  const deleteImage = () => {
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
    <div className='box-size'>
      <Draggable cancel="strong" {...dragHandlers}>
        <div className="box box-position"
             onClick={handleSelectImage}
             onTouchStart={handleSelectImage}>
          <div className='box-container'
               style={{transform: `rotate(${activeId ? textEditorParams.rotateState : currentState.rotate}deg)`}}>
            <div className='div-flex div-center image-rotate-pos no-cursor'>
              <strong className='no-cursor'>
                {currentState.focusState && (
                  <div onMouseDown={textEditorParams.initRotate}
                       onTouchStart={textEditorParams.initRotate}>
                    <img src={Reboot} alt='Reboot' height={24} width={24}/>
                  </div>
                )}
              </strong>
            </div>
            <div className='no-cursor image-trash-pos'>
              <strong className='no-cursor'>
                {currentState.focusState && (
                  <div className='image-div-block' onClick={deleteImage}>
                    <img src={Trash} alt='TrashCan' height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
            <div className='max-image'>
              <ImageBlock src={currentState.image.img}
                          alt={currentState.image.alt}
                          activeState={currentState.focusState}
                          ref={activeId ? textEditorParams.refResize : null}/>
            </div>
            <div className='no-cursor image-resize-pos'>
              <strong>
                {currentState.focusState && (
                  <div className='image-div-block resize'
                       onMouseDown={textEditorParams.initResize}
                       onTouchStart={textEditorParams.initResize}>
                    <img src={LeftAndRightArrows} alt="LeftAndRightArrows" height={10} width={10}/>
                  </div>
                )}
              </strong>
            </div>
          </div>
          <CenterRotate ref={activeId ? textEditorParams.refRotate : null}/>
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableImage;