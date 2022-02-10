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
  font-family: "Objectivity";
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
    0px 16px 24px rgba(96, 97, 112, 0.16);
  width: 100vw;
  transition: 0.4s;
  height: 0vh;
  ${({ openTextEditor }) => openTextEditor && "height: 20vh;transition: 0.4s;"};
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
