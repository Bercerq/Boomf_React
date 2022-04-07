import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {ConfettiTaDahImg, TextContentTaDah} from "../../TaDah/TaDahSection/style";
import {SheetContainerFrontPage} from "./style";

const FrontPage = ({standardName, type}) => {
  const [firstLoading, setFirstLoading] = useState(false);

  const {confettiState} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  useEffect(() => {
    const timer = setTimeout(() => setFirstLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    }
  }, []);
  return (
    <>
      {type === 'TaDah' && (
        <ConfettiTaDahImg
          src={confettiState.img}
          alt={confettiState.alt}
        />
      )}
      <SheetContainerFrontPage
        standardName={standardName === 'Front'}
        firstLoading={firstLoading}
        type={type}
      >
        <TextContentTaDah/>
      </SheetContainerFrontPage>
    </>
  );
};

export default FrontPage;