import styled from "styled-components";

export const TextEditorWrapper = styled.div`
  height: fit-content;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: end;
  z-index: 4;
  opacity: 0;
  transition: 0.6s;
  pointer-events: none;
  ${({currentEditor}) =>
          currentEditor && "opacity:1; pointer-events: all;transition: 0.6s;"}
`;
export const TextEditorContent = styled.div`
  z-index: 3;
  font-family: "objectivity-regular-11", sans-serif;
  padding-top: 42px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
  0px 16px 24px rgba(96, 97, 112, 0.16);
  width: 100vw;
  transition: 0.4s;
  height: 0vh;
  ${({currentEditor}) =>
          currentEditor &&
          "height: 22vh;transition: 0.4s;  @media (max-height: 845px) { height: 35vh;}@media (max-height: 490px) { height: 45vh;}"};

  @media (max-width: 1470px) {
    padding-left: 20%;
  }
  @media (max-width: 1130px) {
    padding: unset;
    padding-top: 42px;
  }
`;
export const ButtonWrapper = styled.div`
  width: 400px;
  margin: 36px auto;
  display: flex;
  justify-content: center;

  div {
    margin: 0 12px;
  }
`;
export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Option = styled.div`
  width: 78px;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 0 12px;
  padding: 16px 16px 26px 16px;
  cursor: pointer;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08),
  0px 0.5px 2px rgba(96, 97, 112, 0.16);

  &:hover {
    filter: drop-shadow(0px 0px 1px rgba(53, 53, 53, 0.1)) drop-shadow(0px 8px 8px rgba(53, 53, 53, 0.1));
    transition: 0.4s;
  }

  transition: 0.4s;
  @media (max-width: 520px) {
    padding: 8px 8px 16px 8px;
    margin: 0 4px;
  }
`;
export const OptionDevice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background: #f5f5f5;
  border-radius: 50%;
  margin: 0 10px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(40, 41, 61, 0.08),
  0 0.5px 2px rgba(96, 97, 112, 0.16);

  &:hover {
    filter: drop-shadow(0px 0px 1px rgba(53, 53, 53, 0.1)) drop-shadow(0px 8px 8px rgba(53, 53, 53, 0.1));
    transition: 0.4s;
  }

  transition: 0.4s;
`;
export const OptionIcon = styled.div`
  width: 60px;
  margin: auto;
`;
export const OptionIconDevice = styled.div`
  display: flex;
  width: fit-content;
  margin: 0;
`;
export const OptionText = styled.div`
  padding-top: 14px;
  font-family: "objectivity-regular-11", sans-serif;
  color: #222222;
  font-weight: 600;
`;

//Options

//Font
export const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  ${({colourDevice}) => colourDevice && 'margin-bottom: 10px;'};
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
export const OptionWrapperDevice = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: auto;
  width: 100%;
  margin-bottom: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const FontItem = styled.div`
  font-weight: normal;
  font-size: 20px;
  width: 180px;
  background: #f5f5f5;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
  0px 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  margin: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({family, option}) =>
          family === option
                  ? `border: 3px solid #0A74FF;`
                  : "border: 3px solid transparent;"};
  ${({family}) => `font-family:${family}`};
  padding: 8px 0;
  cursor: pointer;

  @media (max-width: 1130px) {
    font-size: 14px;
    width: 120px;
    margin: 6px;
  }
  @media (max-width: 520px) {
    font-size: 12px;
  }
`;
export const FontItemDevice = styled(FontItem)`
  border-radius: 50%;
  width: fit-content;
  background: black;
  color: white;
  height: 15px;
  padding: 14px;
  border: 0;
  ${({family, option}) =>
          family === option
                  ? `background: white; color: #2EDBE3;`
                  : ""};
`;
//Size
export const SliderContainer = styled.div`
  width: 30%;
  margin: auto;
  ${({sizeDevice}) => sizeDevice && `width: 60%; margin-bottom: 10px`}
`;
export const CurrentValue = styled.div`
  text-align: center;
  margin-bottom: 23px;
  font-family: "objectivity-regular-11", sans-serif;
  font-size: 20px;
`;
export const Slider = styled.input`
  width: 100%;
  height: 2px;
  opacity: 0.7;

  &:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  cursor: pointer;
`;
//Colour
export const ColorItem = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
  0px 2px 4px rgba(96, 97, 112, 0.16);

  background-color: ${({color}) => `${color}`};
  border: 2px solid transparent;
  ${({option, color}) =>
          option === color &&
          `box-shadow: 0px 0px 0px 7px rgba(255, 255, 255, 1) inset; border:2px solid ${color}`};
  margin: 0px 12px;

  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 420px) {
    margin: 0px 4px;
  }
`;

export const ColorItemPalete = styled.div`
  span {
    font-size: 50px;
    color: #2edbe3;
    display: flex;
    justify-content: center;
    @media (max-width: 640px) {
      font-size: 35px;
    }
  }

  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
  0px 2px 4px rgba(96, 97, 112, 0.16);
  margin: 0px 12px;
  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 420px) {
    margin: 0px 4px;
  }
  img {
    width: 100%;
  }
`;

export const ColourPalete = styled.div`
  position: absolute;
  right: 24%;
  bottom: 0;
`;

// Image

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media (max-width: 1470px) {
    width: 83%;
  }

  @media (max-width: 1130px) {
    width: 100%;
  }
`;

export const SliderContainerImage = styled.div`
  min-width: 420px;
  @media (max-width: 1130px) {
    min-width: 280px;
  }
  @media (max-width: 520px) {
    min-width: 200px;
  }
`;

export const EditActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  cursor: pointer;
  @media (max-width: 480px) {
    margin-right: 20px;
  }
`;
export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 6px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
  0px 2px 4px rgba(96, 97, 112, 0.16);
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }
`;
export const ImageItem = styled.img``;
export const Text = styled.div`
  font-family: "objectivity-regular-11", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  color: #3d3d3d;
`;

export const DiagonalLineOne = styled.div`
  position: absolute;
  border-top: 1px solid #ffffff;
  transform-origin: ${({originLine}) => (originLine ? "left" : "right")};
  left: ${({originLine}) => (originLine ? 0 : "auto")};
  right: 0;
  top: 0;
  bottom: ${({originLine}) => (originLine ? 0 : "auto")};
  height: 1px;
  width: ${({widthLine}) => `${widthLine}px`};
  transform: rotate(${({rotateLine}) => `${rotateLine}deg`});
`;
