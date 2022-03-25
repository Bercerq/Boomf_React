import React from 'react';
import {SheetContainer, TextContentStandard} from "./style";

const FontPage = ({standardName}) => {
  return (
    <SheetContainer oneSheet={true} standardName={standardName === 'Front' ? '50vw' : '-50vw'}>
      <TextContentStandard>

      </TextContentStandard>
    </SheetContainer>
  );
};

export default FontPage;