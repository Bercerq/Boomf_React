import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import Plus from "../../../../utils/assets/svg/Plus.svg";
import Stick from "../../../../utils/assets/svg/MallowStick.svg";

import { Title, BoxWrapper } from "../style";
import {
  AddImage,
  BoxImage,
  MallowBox,
  MallowBoxWrapper,
  StickImage,
} from "./style";
import useUpdateMallowPops from "../../../../utils/hooks/useUpdateMallowPops";
import { useResizeDevice } from "../../../../utils/hooks/useResizeDevice";

function MallowColums({ editTextRef, standardName }) {
  const dispatch = useDispatch();
  const [boxId, setBoxId] = useState();
  const { curCubeImage } = useSelector(({ sidebarReducer }) => sidebarReducer);

  const { mallowpops } = useSelector(
    ({ mallowPopsReducer }) => mallowPopsReducer
  );

  const { mobileDevice } = useResizeDevice({ maxWidth: 1130 });
  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  const selectBox = (id) => () => {
    setBoxId(id);
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };
  useUpdateMallowPops(curCubeImage?.url || curCubeImage?.img, mallowpops, boxId);

  return (
    <BoxWrapper
      id="buttonClickStandard"
      ref={(ref) => (editTextRef.current[1] = ref)}
      focusState={textDataState.focusState && mobileDevice}
      standardName={standardName === "Card"}
    >
      <Title>Mallowpops</Title>

      <MallowBoxWrapper>
        {mallowpops?.map(({ id, image }) => (
          <div key={id} style={{ position: "relative" }}>
            <MallowBox onClick={selectBox(id)}>
              {!image ? (
                <AddImage>
                  <img src={Plus} alt="Plus" />
                </AddImage>
              ) : (
                <BoxImage src={image} />
              )}
            </MallowBox>
            <StickImage src={Stick} alt="Stick" />
          </div>
        ))}
      </MallowBoxWrapper>
    </BoxWrapper>
  );
}

export default MallowColums;
