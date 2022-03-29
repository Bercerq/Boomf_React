import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import Plus from "../../../../utils/assets/svg/Plus.svg";
import Stick from "../../../../utils/assets/svg/MallowStick.svg";

import { ColorItemPalete } from "../../../TextEditor/style";
import { Title, BoxWrapper } from "../style";
import { BoxImage, MallowBox, MallowBoxWrapper, StickImage } from "./style";
import useUpdateMallowPops from "../../../../utils/hooks/useUpdateMallowPops";

function MallowColums() {
  const dispatch = useDispatch();
  const [boxId, setBoxId] = useState();
  const { imageState } = useSelector(
    ({ imageLibraryReducer }) => imageLibraryReducer
  );
  const { mallowpops } = useSelector(
    ({ mallowPopsReducer }) => mallowPopsReducer
  );
  const selectBox = (id) => () => {
    setBoxId(id);
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };

  useUpdateMallowPops(imageState?.url || imageState?.img, mallowpops, boxId);

  return (
    <BoxWrapper>
      <Title>Mallowpops</Title>

      <MallowBoxWrapper>
        {mallowpops?.map(({ id, image }) => (
          <div key={id} style={{ position: "relative" }}>
            <MallowBox onClick={selectBox(id)}>
              {!image ? (
                <ColorItemPalete>
                  <img src={Plus} alt="Plus" />
                </ColorItemPalete>
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
