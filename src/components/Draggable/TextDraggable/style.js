import styled from "styled-components";

export const FormTextContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  top: auto;
  left: auto;
  right: auto;
  bottom: auto;

  width: 76%;
  height: 23%;
  margin-bottom: 45px;
  border: 1px dashed #F5F5F5;
  box-sizing: border-box;
  border-radius: 8px;

  word-break: break-word;
  z-index: 3;
`;

export const DivThree = styled.div`
  position: absolute;
  left: -12px;
  top: 20px;
`;

export const CenterRotate = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  right: 50%;
`;

export const DivTextContent = styled.div`
  cursor: pointer;
  min-width: 195px;
  min-height: 18px;
  padding: 8px;

  ${({activeSizeImage}) => activeSizeImage && `width: 265px;`}
  ${({activeState}) =>
          `cursor: ${activeState ? 'all-scroll; border: 2px solid #0A74FF' : 'auto'}`};
`;

export const TextareaDraggable = styled.textarea`
  resize: none;
  cursor: unset !important;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border-color: transparent;
  z-index: 4;
  overflow: hidden;

  &:focus {
    outline: none !important;
    border-color: transparent;
  }

  &::placeholder {
    color: unset;
  }

  ${({activeState}) =>
          `cursor: ${activeState ? 'all-scroll; border: 2px solid #0A74FF' : 'auto;'}`};
  font-family: ${({textStyles}) =>
          textStyles.font ? `${textStyles.font}` : "Objectivity"};
  font-size: ${({textStyles}) =>
          textStyles.size ? `${textStyles.size}px` : "20px"};
  color: ${({textStyles}) =>
          textStyles.colour ? `${textStyles.colour}` : "#222222"};
  text-align: ${({textStyles}) =>
          textStyles.alignment ? `${textStyles.alignment}` : "center"};
`;

export const TextEditorForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;