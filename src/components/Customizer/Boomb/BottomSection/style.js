import styled from "styled-components";

//BOTTOM IMAGE PICKER

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 15px;
  @media (max-width: 1130px) {
    bottom: 160px;
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
  align-items: center;
  @media (max-width: 1130px) {
    margin: auto;
  }
`;
export const PickerItem = styled.div`
  display: block;
  margin: 0 8px;
  height: fit-content;

  @media (max-width: 1130px) {
    margin: 0 8px;
  }
  @media (max-width: 380px) {
    margin: 0 6px;
  }
  @media (max-width: 360px) {
    margin: 0 2px;
  }
`;

export const PickerItemText = styled.div`
  display: block;
  margin: 0 12px;
  @media (max-width: 1130px) {
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
  margin: auto;
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(53, 53, 53, 0.281))
      drop-shadow(0px 8px 16px rgba(53, 53, 53, 0.281));
    transition: 0.4s;
    border: ${({ curCubePosition, position }) =>
      curCubePosition !== position && "3px solid transparent"};
  }
  @media (max-width: 1130px) {
    width: 56px;
    height: 56px;
  }
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  right: 45px;
  @media (max-width: 1190px) {
    right: 15px;
    width: 180px;
  }
  @media (max-width: 1130px) {
    position: absolute;
    right: 35px;
    width: 90%;
    margin: auto;
    bottom: -50px;
  }

  @media (max-width: 625px) {
    right: 30px;
    width: 95vw;
  }
  @media (max-width: 520px) {
    bottom: -45px;
  }
  @media (max-width: 420px) {
    right: 9px;
  }
`;
export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  ${({ src }) => !src && "opacity:0"}
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
  @media (max-height: 720px) {
    font-size: 12px;
  }
  @media (max-width: 1130px) {
    display: none;
  }
`;
