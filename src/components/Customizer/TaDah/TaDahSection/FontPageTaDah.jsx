import React, {useEffect, useState} from 'react';
import {SheetContainerFrontPage} from "../../Standard/SheetSection/style";
import {ConfettiTaDahImg, TextContentTaDah} from "./style";
import {useSelector} from "react-redux";

const FontPageTaDah = ({standardName}) => {
  const [firstLoading, setFirstLoading] = useState(false)

  const {confettiState} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  useEffect(() => {
    const timer = setTimeout(() => setFirstLoading(true), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, []);
  return (
    <>
      <ConfettiTaDahImg
        src={confettiState.img}
        alt={confettiState.alt}
        displayOpacity={standardName}
      />
      <SheetContainerFrontPage
        standardName={standardName === 'Front'}
        firstLoading={firstLoading}
      >
        <TextContentTaDah/>
      </SheetContainerFrontPage>
    </>
  );
};

export default FontPageTaDah;