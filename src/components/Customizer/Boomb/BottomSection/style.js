import styled from "styled-components";

//BOTTOM IMAGE PICKER

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
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
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin: auto;
    width: 95%;
  }
`;
export const PickerItem = styled.div`
  display: block;
  margin: 0 12px;
  height: fit-content;

  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin: 0 4px;
  }
`;

export const PickerItemText = styled.div`
  display: block;
  margin: 0 12px;
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin: 0 4px;
    font-size: 11px;
    height: 120px;
    display: flex;
    flex-direction: column;
  }
`;
export const BoxSide = styled.div`
  border: ${({ curCubePosition, position }) =>
    curCubePosition && curCubePosition === position
      ? `3px solid #2EDBE3;`
      : "3px solid #f5f5f5"};
  height: 120px;
  width: 120px;
  ${({ img }) => !img && "background: #d6d6d6;"};
  cursor: pointer;
  word-break: break-all;
  transition: 0.4s;
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(53, 53, 53, 0.281))
      drop-shadow(0px 8px 16px rgba(53, 53, 53, 0.281));
    transition: 0.4s;
    border: ${({ curCubePosition, position }) =>
      curCubePosition !== position && "3px solid transparent"};
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
    font-family: "objectivity-regular-11", sans-serif;
    opacity: 0;
    padding: 15px;
    color: gray;
    word-break: keep-all;
    transition: 0.4s;
    max-width: 120px;
  }
  &:hover {
    .BoxNoImage {
      opacity: 1;
      transition: 0.4s;
    }
  }
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    width: 90px;
    height: 85px;
  }
  @media (max-width: 520px) {
    width: 60px;
    height: 70px;
  }
  @media (max-width: 480px) {
    height: 65px;
  }
  @media (max-height: 660px) {
    width: 50px;
    height: 50px;
  }
  @media (max-height: 640px) {
    width: 57px;
    height: 57px;
  }
  
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  right: 45px;
  @media (max-width: 1190px) {
    right: 15px;
    width: 180px;
  }
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    position: static;
    right: unset;
    margin: 30px;
    width: 200px;
  }

  @media (max-height: 760px) {
    margin: 10px;
  }
`;
export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
`;
export const BoxText = styled.div`
  font-size: 16px;
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: 400;
  text-align: center;
  color: #222222;
  margin-top: 5px;
  @media (max-width: 675px) {
    font-size: 12px;
  }
`;
