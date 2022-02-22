import React, {useEffect, useRef} from 'react';
import {useFocus} from "../../../../utils/hooks/useFocus";
import {changeTopText, openEditor} from "../../../../utils/functions/boomb";
import {CubeItem, TopText} from "../../Boomb/CubeSection/style";
import {useDispatch} from "react-redux";
import {PostcardSide} from "./style";

const PostcardSideComponent = ({
  textStyles,
  focusState,
  topText,
  setTopText,
}) => {
  const [inputRef, setInputRef] = useFocus();

  useEffect(() => {
    if (focusState) {
      setInputRef();
    }
  }, [focusState]);

  const ref = useRef();
  const dispatch = useDispatch();

  return (
    <>
      <PostcardSide
        id="buttonClickCannon"
        onClick={openEditor(dispatch, "buttonClickCannon")}
      >
        <CubeItem ref={ref} topText={topText}>
          <TopText
            focusState={focusState}
            ref={inputRef}
            textStyles={textStyles}
            onChange={(e) => changeTopText(setTopText, e)}
            type="text"
            value={topText}
            resize="none"
            readOnly={focusState ? false : true}
          />
        </CubeItem>
      </PostcardSide>
    </>
  );
};

export default PostcardSideComponent;