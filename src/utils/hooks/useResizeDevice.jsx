import {useEffect, useState} from 'react';

export const useResizeDevice = ({maxWidth = 1130}) => {
  const [mobileDevice, setMobileDevice] = useState(window.matchMedia(`(max-width: ${maxWidth}px)`).matches);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobileDevice(window.matchMedia(`(max-width: ${maxWidth}px)`).matches)
    });
  }, []);

  return {mobileDevice};
};