import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findMobileDevice} from "../../../../utils/functions/Panel";
import {closeSelectDevice} from "../../../../utils/functions/imageLibrary";

import {
  DeviceButtonClose,
  DeviceCloseWindow,
  DeviceContent,
  DeviceDivCenter,
  DeviceSelectImage,
} from "./style";

const MobileDevices = () => {
  const [{selected, title}, setActiveState] = useState({selected: false, title: ""});

  const {selectedBackground} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );
  const {selectedConfetti} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  useEffect(() => {
    if (selectedBackground) {
      setActiveState({selected: true, title: "Background"});
    } else if (selectedConfetti) {
      setActiveState({selected: true, title: "Confetti"});
    } else if (!selectedBackground && !selectedConfetti) {
      setActiveState({selected: false, title: ""});
    }
  }, [selectedBackground, selectedConfetti]);

  const dispatch = useDispatch();
  return (
    <DeviceSelectImage currentEditor={selected}>
      <DeviceDivCenter>
        <DeviceCloseWindow onClick={closeSelectDevice(dispatch)}/>
      </DeviceDivCenter>
      <h3>{title}</h3>
      <DeviceContent>
        {findMobileDevice({title, selected})}
        <DeviceButtonClose onClick={closeSelectDevice(dispatch)}>
          Close
        </DeviceButtonClose>
      </DeviceContent>
    </DeviceSelectImage>
  );
};

export default MobileDevices;
