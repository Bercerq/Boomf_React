import {useCallback, useEffect, useState} from 'react';
import {getCenterBox, rotateDegree} from "../functions/textData";

export const useRotate = (ref, option, initialRotate) => {
  const [enableRotate, setEnableRotate] = useState(false);
  const [rotateState, setRotateState] = useState(initialRotate);
  const [cursorPosition, setCursorPosition] = useState(null);

  const initRotate = (event) => {
    if (!ref.current) {
      return;
    }
    document.body.style.overflow = 'hidden';
    setEnableRotate(true);
  }

  const handleRotate = useCallback((e) => {
    if (!ref.current || !enableRotate) {
      return;
    }
    if (e.type === 'touchmove') {
      setRotateState(rotateDegree(e.touches[0], getCenterBox(ref.current, window.scrollY)))
      setCursorPosition(e.touches[0].clientX);
    } else {
      setRotateState(rotateDegree(e, getCenterBox(ref.current, window.scrollY)))
      setCursorPosition(e.clientX)
    }
  }, [cursorPosition, enableRotate]);

  useEffect(() => {
    const stopRotate = () => {
      document.removeEventListener('mousemove', handleRotate, false);
      document.removeEventListener('mouseup', stopRotate, false);
      document.removeEventListener('touchmove', handleRotate, false);
      document.removeEventListener('touchend', stopRotate, false);
      document.body.style.overflow = 'auto';
      setEnableRotate(false);
    }

    if(enableRotate) {
      document.addEventListener('mousemove', handleRotate, false);
      document.addEventListener('mouseup', stopRotate, false);
      document.addEventListener('touchmove', handleRotate, false);
      document.addEventListener('touchend', stopRotate, false);
    }
  }, [enableRotate, handleRotate])

  return {initRotate, rotateState};
};