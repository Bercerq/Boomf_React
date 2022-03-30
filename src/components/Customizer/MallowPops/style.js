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
  @media (max-width: 1130px) {
    flex-direction: row-reverse;
  }
`;

export const ButtonWrapper = styled.div`
  width: 210px;
  margin-left: auto;
  margin-right: 75px;
  margin-top: 15vh;
  @media (max-height: 690px) {
    margin-top: 5vh;
  }
  @media (max-height: 610px) {
    margin-top: unset;
  }
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
  @media (max-height: 700px) {
    margin-bottom: unset;
  }
`;

export const BoxWrapper = styled.div`
  width: 386px;
  margin-left: 75px;
  margin-right: 75px;
  display: flex;
  flex-direction: column;
  transition-duration: 1s;

  @media (max-width: 1130px) {
    position: fixed;
    top: 50px;
    margin-left: unset;
    margin-right: unset;
    align-items: center;
    transform: translate(
      ${({ standardName }) => (standardName ? "0" : "-100vw")},
      0
    );
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-height: 700px) {
    top: 20px;
  }

  @media (max-width: 920px) {
    transform: translate(
      ${({ standardName }) => (standardName ? "0" : "-100vw")},
      0
    );
  }

  ${({ focusState }) => focusState && `z-index: 4;`}
`;

export const BoxWrapperCard = styled.div`
  width: 386px;
  margin-left: 75px;
  margin-right: 75px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1130px) {
    margin-left: unset;
    margin-right: unset;
    position: fixed;
    top: 50px;
    align-items: center;
    transition-duration: ${({ firstLoading }) => (firstLoading ? "1s" : "0s")};
    transform: translate(
      ${({ standardName }) => (standardName ? 0 : "150vw")},
      0
    );
  }
  @media (max-height: 700px) {
    top: 20px;
  }
`;
