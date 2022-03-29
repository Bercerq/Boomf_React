import styled from "styled-components";

export const ConfettiWrapperCannonColumn = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: column;

  width: 40vw;
  padding: 0 50px 0 40px;

  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    position: static;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
  }
  @media (max-height: 600px) and (max-width: 1300px) {
    width: auto;
  }
  @media (max-width: 540px) {
    right: 20px;
  }
  @media (max-width: 400px) {
    margin-left: unset;
  }
`;

export const BackgroundWrapperCannon = styled(ConfettiWrapperCannonColumn)`
  padding: 0;
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin-top: 12px;
  }
`;

export const ConfettiBoxCannon = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: auto;
  width: 100%;
  padding-right: 20px;
  @media (min-width: 1440px) {
    overflow: hidden;
  }
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent};
    padding: 0;
  }
`;

export const BackgroundBoxCannon = styled(ConfettiBoxCannon)`
  grid-template-columns: repeat(${({columnConfetti}) => columnConfetti}, 1fr);
  justify-items: center;

  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    justify-content: flex-start;
    width: 63%;
  }
  @media (max-height: 600px) and (max-width: 1300px) {
    display: grid;
    width: fit-content;
  }
  
  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const ConfettiItemCannon = styled.div`
  cursor: pointer;
  width: 78px;
  height: 78px;
  margin: 10px;
  border-radius: 50%;
  transition: 0.4s;
  background-color: white;
  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04)) drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16));
  ${({selectConfetti}) =>
          `border: 4px solid ${
                  selectConfetti ? "#2EDBE3" : "transparent"
          };  transition: 0.4s;`};
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin: 0 10px 12px 10px;
    width: 45px;
    height: 45px;
  }
  @media (max-width: 540px) {
    margin: 7px;
  }
`;

export const TitleCannon = styled.div`
  color: #717171;
  font-size: 16px;
  font-family: "objectivity-regular-11", sans-serif;
  width: 100%;
  text-align: start;

  span {
    font-weight: bold;
  }

  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin: 12px 0 0 0;
    &:last-child {
      display: block;
      margin: 0;
    }
  }
`;

export const BackgroundItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: 7px;
  border-radius: 50%;
  transition: 0.4s;
  background: #ffffff;
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    margin: 0 10px 12px 10px;
  }
  ${({mobileDevice}) => mobileDevice ? (
          `filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04)) drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16)); margin-bottom: 15px;`
  ) : ('background: transparent;')};
`;

export const BackgroundImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 0;
  border-radius: 50%;
`;

export const ActiveBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  ${({selectConfetti}) =>
          `border: 6px solid ${
                  selectConfetti ? "#FFFFFF; transform: scale(0.75);" : "transparent"
          }; transition: 0.4s;`};
`;