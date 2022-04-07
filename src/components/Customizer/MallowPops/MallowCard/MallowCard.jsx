import React, { useEffect, useState } from "react";
import TextDraggable from "../../../Draggable/TextDraggable";
import { Title, BoxWrapperCard } from "../style";
import { CardBox, CardContainer, SpaceForText } from "./style";
import { TextEditorWrapper } from "./../../Boomb/CubeSection/style";
import { useSelector } from "react-redux";

function MallowCard({ standardName, editTextRef }) {
  const [firstLoading, setFirstLoading] = useState(false);

  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );
  useEffect(() => {
    const timer = setTimeout(() => setFirstLoading(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  console.log(textDataState);
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
            textDataState={textDataState}
            height={"30%"}
            width={"75%"}
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
