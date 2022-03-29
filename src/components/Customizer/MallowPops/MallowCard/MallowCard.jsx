import React from "react";
import TextDraggable from "../../../Draggable/TextDraggable";
import { Title, BoxWrapper } from "../style";
import { CardContainer, SpaceForText } from "./style";

function MallowCard({ editTextRef }) {
  return (
    <BoxWrapper>
      <Title>Card</Title>
      <CardContainer>
        <div style={{ height: "280px" }}></div>

        <SpaceForText>
          <div
            style={{ left: "35px", top: "38px", position: "absolute" }}
            id="buttonClickCannon"
            ref={(ref) => (editTextRef.current[1] = ref)}
          >
            <TextDraggable buttonFlag="buttonClickCannon" column={1} />
          </div>
        </SpaceForText>
      </CardContainer>
    </BoxWrapper>
  );
}

export default MallowCard;
