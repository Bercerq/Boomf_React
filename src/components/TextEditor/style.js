import styled from "styled-components";
export const TextEditorWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: end;
  z-index: 3;
  opacity: 0;
  transition: 0.6s;
  pointer-events: none;
  ${({ openTextEditor }) =>
    openTextEditor && "opacity:1; pointer-events: all;transition: 0.6s;"}
`;
export const TextEditorContent = styled.div`
  z-index: 3;
  font-family: "Objectivity";
  padding-top: 42px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
    0px 16px 24px rgba(96, 97, 112, 0.16);
  width: 100vw;
  transition: 0.4s;
  height: 0vh;
  ${({ openTextEditor }) => openTextEditor && "height: 20vh;transition: 0.4s;"};
`;
export const ButtonWrapper = styled.div`
  width: 400px;
  margin: 24px auto;
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
  &:hover {
    filter: drop-shadow(0px 0px 1px rgba(53, 53, 53, 0.1))
      drop-shadow(0px 8px 8px rgba(53, 53, 53, 0.1));
    transition: 0.4s;
  }
  transition: 0.4s;
`;
export const OptionIcon = styled.div`
  width: 60px;
  margin: auto;
`;
export const OptionText = styled.div`
  padding-top: 14px;
  font-family: "Objectivity";
  color: #222222;
  font-weight: 600;
`;

//Options

//Font
export const FontWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;
export const FontItem = styled.div`
  font-weight: normal;
  font-size: 20px;
  width: 180px;
  background: #f5f5f5;
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  margin: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;

${({ family, option }) =>
  family === option
    ? `border: 3px solid #0A74FF;`
    : "border: 3px solid transparent;"};

${({ family }) => `font-family:${family}`};

padding: 8px 0;
cursor: pointer;};


`;
//Size
export const SliderContainer = styled.div`
  width: 30%;
  margin: auto;
`;

export const CurrentValue = styled.div`
  text-align: center;
  margin-bottom: 23px;
  font-family: "Objectivity";
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
