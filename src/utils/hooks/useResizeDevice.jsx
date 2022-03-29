import {useEffect, useState} from 'react';

export const useResizeDevice = ({maxWidth = 1130, minWidth = 1130}) => {
  const [mobileDevice, setMobileDevice] = useState(window.matchMedia(`(max-width: ${maxWidth}px)`).matches);
  const [mobileDeviceMin, setMobileDeviceMin] = useState(window.matchMedia(`(min-width: ${minWidth}px)`).matches)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobileDevice(window.matchMedia(`(max-width: ${maxWidth}px)`).matches);
      setMobileDeviceMin(window.matchMedia(`(min-width: ${minWidth}px)`).matches);
    });
  }, []);

  return {mobileDevice, mobileDeviceMin};
};