import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  margin: 126px 0;
  @media (max-height: 830px) {
    margin: 30px 0;
  }
`;

export const MallowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 210px;
  margin-left: auto;
  margin-right: 75px;
`;
export const Title = styled.h1`
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #222222;
  margin-bottom: 50px;
  @media (max-height: 830px) {
    margin-bottom: 30px;
  }
`;

export const BoxWrapper = styled.div`
  width: 386px;
  margin-left: 75px;
  margin-right: 75px;
`;
