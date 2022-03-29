import React from "react";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

import { background } from "../../../utils/constants/TextEditData";

import Plus from "../../../utils/assets/svg/Plus.svg";
import {
  OptionWrapper,
  ColorItem,
  ColourPalete,
  ColorItemPalete,
} from "../style";
import { useSelector } from "react-redux";
function Colour({  setOption, colourDevice }) {
  const [paleteState, setPaletestate] = useState(false);
  const [colorPalete, setColorPalete] = useColor();

  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  const handleSetFonts = (color) => () => {
    setOption(color);
  };
  const handleClickPalete = () => {
    setPaletestate(!paleteState);
  };
  const handleSetFontsPelete = (e) => {
    setOption(e.hex);
    setColorPalete({ hex: e.hex, rgb: e.rgb, hsv: e.hsv });
  };

  return (
    <OptionWrapper colourDevice={colourDevice}>
      {background.map((color) => (
        <ColorItem
          key={color}
          option={textDataState.textStyles?.colour}
          onClick={handleSetFonts(color)}
          color={color}
        />
      ))}
      <ColorItemPalete>
        <img onClick={handleClickPalete} src={Plus} alt="Plus" />
      </ColorItemPalete>
      {paleteState && (
        <ColourPalete>
          <ColorPicker
            width={156}
            height={128}
            color={colorPalete}
            onChange={handleSetFontsPelete}
            hideHSV
            hideRGB
            hideHEX
          />
        </ColourPalete>
      )}
    </OptionWrapper>
  );
}

export default Colour;
