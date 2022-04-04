import React, {useEffect, useState} from "react";
import TextDraggable from "../../../Draggable/TextDraggable";
import {Title, BoxWrapperCard} from "../style";
import {CardBox, CardContainer, SpaceForText} from "./style";
import { TextEditorWrapper } from './../../Boomb/CubeSection/style';

function MallowCard({standardName, editTextRef}) {
  const [firstLoading, setFirstLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFirstLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BoxWrapperCard
      firstLoading={firstLoading}
      standardName={standardName === "AddCart"}
    >
      <Title>Card</Title>
      <CardContainer>
        <CardBox></CardBox>

        <SpaceForText>
          <TextEditorWrapper
            id="buttonClickMallowpops"
            ref={(ref) => (editTextRef.current[1] = ref)}
          >
            <TextDraggable
              buttonFlag="buttonClickMallowpops"
              activeRebootImage={true}
              column={1}
            />
          </TextEditorWrapper>
        </SpaceForText>
      </CardContainer>
    </BoxWrapperCard>
  );
}

export default MallowCard;
