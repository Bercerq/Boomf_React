import React, {useEffect, useState} from 'react';
import {SheetContainerFrontPage, TextContentStandard} from "./style";

const FontPage = ({standardName}) => {
  const [firstLoading, setFirstLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFirstLoading(true), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, []);

  return (
    <SheetContainerFrontPage
      standardName={standardName === 'Front'}
      firstLoading={firstLoading}
    >
      <TextContentStandard />
    </SheetContainerFrontPage>
  );
};

export default FontPage;