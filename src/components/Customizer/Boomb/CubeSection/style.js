import styled from "styled-components";

// CUBE
export const SideContent = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  @media (max-width: 1130px) {
    order: 2;
  }
  @media (max-width: 1130px) {
    height: unset;
  }
  @media (min-height: 780px) {
    height: 72.5vh;
  }
`;

export const CubeContainer = styled.div`
  width: 60vw;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 55vw;
  }
  @media (max-width: 1130px) {
    width: 80vw;
  }
  @media (max-width: 640px) {
    width: 80vw;
    justify-content: start;
  }
  @media (max-width: 340px) {
    width: 85vw;
  }
  @media (max-width: 510px) {
    width: 65vw;
  }
  @media (max-height: 850px) and (max-width: 400px) {
    width: 80vw;
  }
`;
export const CubeWrapper = styled.div`
  background-image: ${({ confettiState }) => `url(${confettiState})`};
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  user-select: none;
  padding: 120px 200px;
  overflow: hidden;
  filter: drop-shadow(0px 2px 4px rgba(40, 41, 61, 0.04))
    drop-shadow(0px 8px 16px rgba(96, 97, 112, 0.16));
  @media (max-width: 1200px) {
    padding: 150px;
  }
  @media (max-width: 1010px) {
    padding: 120px;
  }
  @media (max-width: 1130px) {
    padding: 90px 130px;
  }
  @media (max-width: 500px) {
    padding: 80px 100px;
    background-size: 360px;
  }
  /* @media (max-width: 510px) {
    padding: 55px 95px !important;
  } */

  @media (max-width: 340px) {
    padding: 80px 35px;
  }
  /* @media (max-width: 490px) {
    padding: 55px 65px !important;
    background-size: 100% !important;
  }
  @media (max-width: 410px) {
    padding: 55px 45px !important;
    background-size: 100% !important;
  } */
  @media (max-height: 675px) {
    padding: 85px 170px;
  }
  @media screen and (max-height: 680px), screen and (min-width: 580pc) {
    padding: 80px 120px;
  }
  @media (max-height: 625px) {
    padding: 55px 115px;
    background-size: 90%;
  }

  @media (max-width: 510px) {
    padding: 80px 75px;
  }

  @media (max-height: 1155px) and (max-width: 1130px) {
    padding: 240px 130px;
  }
  @media (max-height: 960px) and (max-width: 1130px) {
    padding: 190px 75px;
  }
  @media (max-height: 860px) and (max-width: 1130px) {
    padding: 160px 75px;
  }
  @media (max-height: 790px) and (max-width: 1130px) {
    padding: 120px 75px;
  }
  @media (max-height: 725px) and (max-width: 1130px) {
    padding: 80px 75px;
  }
  @media (max-height: 610px) and (max-width: 1130px) {
    padding: 50px 70px;
  }
`;
export const CubeBox = styled.div`
  margin: auto;
  position: relative;
  height: 30vw;
  width: 60vw;
  max-height: 420px;
  max-width: 420px;
  transform-style: preserve-3d;
  animation: rotate 6s ease infinite;
  transform: translateZ(-200px) rotateX(-20deg)
    ${({ cubeRotateY }) => `rotateY(${cubeRotateY}deg)`};
  transition: transform 0.4s ease-out 0s;
  @media (max-width: 1200px) {
    max-width: 320px;
    max-height: 320px;
    height: 50vw;
    width: 50vw;
    min-width: 320px;
    min-height: 320px;
  }
  @media (max-width: 1130px) {
    max-width: 200px !important;
    max-height: 200px !important;
    height: 20vw !important;
    width: 20vw !important;
    min-width: 200px !important;
    min-height: 200px !important;
  }

  @media (max-width: 520px) {
    max-width: 160px !important;
    max-height: 160px !important;
    height: 18vw !important;
    width: 18vw !important;
    min-width: 160px !important;
    min-height: 160px !important;
  }
  @media (max-height: 780px) {
    max-width: 320px;
    max-height: 320px;
    height: 50vw;
    width: 50vw;
    min-width: 320px;
    min-height: 320px;
  }
  @media (max-height: 675px) {
    max-width: 200px;
    max-height: 200px;
    height: 20vw;
    width: 20vw;
    min-width: 200px;
    min-height: 200px;
  }
`;

//CUBE TOP/CUBE SIDE
export const CubeSide = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.2);
  transform: ${({ spinParam }) => `${spinParam}`} translateZ(210px);
  @media (max-width: 1200px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(160px);
  }
  @media (max-width: 1130px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(100px) !important;
  }
  @media (max-width: 520px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(80px) !important;
  }
  @media (max-height: 780px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(160px);
  }
  @media (max-height: 675px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(100px);
  }
`;

export const CubeItem = styled.label`
  ${({ curCubePosition, position }) =>
    curCubePosition &&
    curCubePosition === position &&
    `animation: shadowActive 1s alternate infinite;`};

  @keyframes shadowActive {
    from {
      filter: brightness(1);
    }

    to {
      filter: brightness(0.8);
    }
  }
  ${({ img }) => (!img || img === "noImage") && "background-color:#f1f1ef;"}

  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    filter: saturate(0.8);
    transition: 0.4s;
  }
  transition: 0.4s;
`;

export const SideImage = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%) ${({ editCrop }) => `scale(${editCrop})`};
`;
export const BoxInfoSide = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 200px;
  font-size: 36px;
  color: rgba(250, 250, 250, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px;
  font-size: 36px;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: "objectivity-regular-11", sans-serif;

  @media (max-width: 1560px) {
    font-size: 13px;
  }
  @media (max-width: 1240px) {
    font-size: 11px;
    width: 50%;
  }
  @media (max-width: 1130px) {
    font-size: 10px;
  }
`;
export const TopText = styled.textarea`
  font-family: ${({ textStyles }) =>
    textStyles.font ? `${textStyles.font}` : "Objectivity"};
  font-size: ${({ textStyles }) =>
    textStyles.size ? `${textStyles.size}px` : "16px"};
  color: ${({ textStyles, focusState }) =>
    focusState
      ? "transparent"
      : textStyles.colour
      ? `${textStyles.colour}`
      : "black"};
  text-align: ${({ textStyles }) =>
    textStyles.alignment ? `${textStyles.alignment}` : "center"};
  position: absolute;
  left: -140px;
  width: 110px;
  top: 113px;
  transform-origin: left top;
  height: 23vw;
  transform: translateX(12vw) rotate(317deg);
  line-height: 1.2;
  overflow-wrap: break-word;
  background: none;
  border: none;
  outline: none;
  @media (max-width: 1060px) {
    left: -40px;
  }
`;
export const NoImage = styled.div`
  font-family: "objectivity-regular-11", sans-serif;
  position: absolute;
  top: 50%;
  left: 15%;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #f3328b;
  width: 60%;
  max-width: 260px;
  padding: 10px 20px 10px 25px;
  border-radius: 8px;
  font-size: 16px;

  @media (max-width: 1560px) {
    font-size: 13px;
    left: 23%;
    padding: 7px;
    width: 50%;
  }
  @media (max-width: 1240px) {
    font-size: 11px;
    left: 21%;
    padding: 8px;
    width: 50%;
  }
  @media (max-width: 1130px) {
    font-size: 10px;
    left: 9%;
    width: 71%;
    top: 43%;
  }
`;
export const StaticText = styled.div`
  font-family: ${({ textStyles }) =>
    textStyles.font ? `${textStyles.font}` : "Objectivity"};
  font-size: ${({ textStyles }) =>
    textStyles.size ? `${textStyles.size}px` : "20px"};
  color: ${({ textStyles }) =>
    textStyles.colour ? `${textStyles.colour}` : "#222222"};
  text-align: ${({ textStyles }) =>
    textStyles.alignment ? `${textStyles.alignment}` : "center"};
  position: absolute;
  top: 19%;
  left: 27%;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  cursor: pointer;
  width: 50%;

  @media (max-height: 1155px) and (max-width: 1130px) {
    top: 33%;
  }
  @media (max-height: 960px) and (max-width: 1130px) {
    top: 28%;
  }
  @media (max-height: 860px) and (max-width: 1130px) {
    top: 25%;
  }
  @media (max-height: 790px) and (max-width: 1130px) {
    top: 18%;
  }
  @media (max-height: 725px) and (max-width: 1130px) {
    top: 16%;
  }
  @media (max-height: 610px) and (max-width: 1130px) {
    top: 14%;
  }
`;
export const EditButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 12px;
  @media (max-width: 1130px) {
    padding: 6px;
  }
  margin: 15px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  transition: 0.3s;
  &:hover {
    padding: 15px;
    transition: 0.3s;
    @media (max-width: 1130px) {
      padding: 8px;
    }
  }
`;
export const EditIcon = styled.img``;

//ROTATE BUTONS
export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  cursor: pointer;
  left: -30px;
  transform: translateY(-50%);
`;
export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  cursor: pointer;
  right: -30px;
  transform: rotate(180deg) translateY(-50%);
  transform-origin: center top;
`;
