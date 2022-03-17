import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findMobileDevice, findMobileDeviceTitle} from "../../../../utils/functions/Panel";
import {closeSelectDevice} from "../../../../utils/functions/imageLibrary";

import {
  DeviceButtonClose,
  DeviceCloseWindow,
  DeviceContent,
  DeviceDivCenter,
  DeviceSelectImage,
} from "./style";
import useDebounce from "../../../../utils/hooks/useDebounce";

const MobileDevices = () => {
  const [selectAnimation, setSelectAnimation] = useState(false);
  const {selectedBackground} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );
  const {selectedConfetti} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const debouncedSelect = useDebounce(selectAnimation, 400);

  useEffect(() => {
    if(selectedBackground || selectedConfetti) {
      setSelectAnimation(true);
    } else {
      setSelectAnimation(false);
    }
  }, [selectedBackground, selectedConfetti])

  const dispatch = useDispatch();
  return ((selectedConfetti || selectedBackground) || debouncedSelect) && (
    <DeviceSelectImage selected={selectedBackground || selectedConfetti}>
      <DeviceDivCenter>
        <DeviceCloseWindow onClick={closeSelectDevice(dispatch)}/>
      </DeviceDivCenter>
      <h3>
        {findMobileDeviceTitle({selectedBackground, selectedConfetti})}
      </h3>
      <DeviceContent>
        {findMobileDevice({selectedBackground, selectedConfetti})}
        <DeviceButtonClose onClick={closeSelectDevice(dispatch)}>
          Close
        </DeviceButtonClose>
      </DeviceContent>
    </DeviceSelectImage>
  );
};

export default MobileDevices;
