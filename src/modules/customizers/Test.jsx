import React, {useState} from 'react';
import {CenterRotate, FormTextContent} from "./testStyle";
import TextDoubleClick from "../../components/TextDoubleClick";

const Test = () => {

  const [enableRotate, setEnableRotate] = useState(false);
  return (
    <FormTextContent
      onMouseUp={() => {setEnableRotate(false)}}
      id='container'
    >
      <TextDoubleClick
        id='element-rotate'
        textState=''
        setEnableRotate={setEnableRotate}
        enableRotate={enableRotate}
      />
      <CenterRotate id='center-rotate'/>
    </FormTextContent>
  )
};

export default Test;