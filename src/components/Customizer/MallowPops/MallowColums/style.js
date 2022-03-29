import styled from "styled-components";
export const MallowWrapper = styled.div``;

export const MallowBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const MallowBox = styled.div`
  cursor: pointer;
  width: 92px;
  height: 92px;
  border-radius: 4px;
  margin: 24px 12px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08),
    0px 0.5px 2px rgba(96, 97, 112, 0.16);
  z-index: 2;
  background-color: #f5f5f5;
  div {
    img {
      margin-top: 20px;
    }
    margin: auto;
  }
`;

export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const StickImage = styled.img`
  margin: 0 12px;
  position: absolute;
  top: 115px;
`;
