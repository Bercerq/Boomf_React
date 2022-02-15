import styled from "styled-components";

//BOTTOM IMAGE PICKER

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1600px) {
    width: 125%;
    flex-direction: row;
    align-items: center;
    justify-content: right;
  }
  @media (max-width: 920px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }
`;

export const ImagePicker = styled.div`
  margin-top: 10px;
  user-select: none;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 920px) {
    margin: auto;
    width: 95%;
  }
`;
export const PickerItem = styled.label`
  display: block;
  margin: 0 12px;
  @media (max-width: 920px) {
    margin: 0 4px;
  }
`;
export const BoxSide = styled.div`
  border: ${({ currPosition, position }) =>
    currPosition && currPosition === position
      ? `3px solid #0A74FF;`
      : "3px solid #f5f5f5"};
  max-width: 120px;
  max-height: 120px;
  height: 100%;
  width: 100%;
  background: #d6d6d6;
  cursor: pointer;
  word-break: break-all;
  transition: 0.4s;

  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(53, 53, 53, 0.281))
      drop-shadow(0px 8px 16px rgba(53, 53, 53, 0.281));
    transition: 0.4s;
    border: ${({ currPosition, position }) =>
       currPosition !== position && "3px solid transparent"};
  }
  &:focus-within {
    filter: drop-shadow(0px 2px 4px rgba(53, 53, 53, 0.281))
      drop-shadow(0px 8px 16px rgba(53, 53, 53, 0.281));
    transition: 0.4s;
  }
  textarea {
    padding: 15px 0 0 15px;
    width: 80%;
    height: 85%;
    background: none;
    border: none;
    resize: none;
    outline: none;
  }
  .BoxNoImage {
    font-family: "Objectivity";
    opacity: 0;
    padding: 15px;
    color: gray;
    word-break: keep-all;
    transition: 0.4s;
    max-width: 120px;
    height: 120px;
  }
  &:hover {
    .BoxNoImage {
      opacity: 1;
      transition: 0.4s;
    }
  }

  @media (max-width: 1120px) {
    height: 70%;
  }
  @media (max-width: 1070px) {
    height: 60%;
  }
  @media (max-width: 920px) {
    height: 75%;
  }
  @media (max-width: 585px) {
    height: 60%;
  }
  @media (max-width: 425px) {
    height: 45%;
  }
`;
export const ButtonWrapper = styled.div`
  width: 195px;
  margin-left: auto;
  @media (max-width: 920px) {
    margin: 30px;
    width: 200px;
  }
`;
export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const BoxText = styled.div`
  font-size: 16px;
  font-family: "Objectivity";
  font-weight: 400;
  text-align: center;
  color: #222222;
  margin-top: 5px;
  @media (max-width: 675px) {
    font-size: 12px;
  }
`;
