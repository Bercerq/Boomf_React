import {useEffect, useState} from 'react';

const cursor = {
  both: 'nwse-resize',
  vertical: 'ns-resize',
  horizontal: 'ew-resize'
}

export const useResize = (ref, options) => {
  const [coords, setCoords] = useState({x: Infinity, y: Infinity});
  const [dims, setDims] = useState({width: Infinity});
  const [size, setSize] = useState({width: Infinity});
  const {step = 1, axis = 'both'} = options || {};
  ref = ref || {};

  const initResize = (event) => {
    console.log('type', event.type);
    if (!ref.current) {
      return;
    }
    if(event.type === 'touchstart') {
      setCoords({ x: event.touches[0].clientX, y: event.touches[0].clientY });
    } else {
      setCoords({ x: event.clientX, y: event.clientY });
    }
    document.body.style.overflow = 'hidden';

    const { width, height } = window.getComputedStyle(ref.current);
    setDims({ width: parseInt(width, 10), height: parseInt(height, 10) });
  }

  useEffect(() => {
    const getValue = (input) => Math.ceil(input / step) * step;

    const doDrag = (event) => {
      if (!ref.current) {
        return;
      }
      let width;
      let height;
        if(event.type === 'touchmove') {
          width = getValue(dims.width + event.touches[0].clientX - coords.x);
          height = getValue(dims.height + event.touches[0].clientY - coords.y);
        } else {
          width = getValue(dims.width + event.clientX - coords.x);
          height = getValue(dims.height + event.clientY - coords.y);
        }

      if (axis === 'both') {
        ref.current.style.width = width + 'px';
        ref.current.style.height = height + 'px';
      }
      if (axis === 'horizontal') {
        ref.current.style.width = width + 'px';
      }
      if (axis === 'vertical') {
        ref.current.style.height = height + 'px';
      }
      setSize({ width, height });
    }

    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag, false);
      document.removeEventListener('mouseup', stopDrag, false);
      document.removeEventListener('touchmove', doDrag, false);
      document.removeEventListener('touchend', stopDrag, false);
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('mousemove', doDrag, false);
    document.addEventListener('mouseup', stopDrag, false);
    document.addEventListener('touchmove', doDrag, false);
    document.addEventListener('touchend', stopDrag, false);
  }, [dims, coords, step, ref, axis])

  return {initResize, size, cursor: cursor[axis]}
};