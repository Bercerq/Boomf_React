import React from "react";
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

const MobileDevices = () => {
  const {selectedBackground} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );
  const {selectedConfetti} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const dispatch = useDispatch();
  return (
    <DeviceSelectImage currentEditor={(selectedBackground || selectedConfetti)}>
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
