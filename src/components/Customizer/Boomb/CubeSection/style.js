import styled from "styled-components";

// CUBE
export const SideContent = styled.div`
  display: block;
  width: 100%;
  @media (max-width: 920px) {
    order: 2;
    width: 100%;
  }
`;

export const CubeContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  @media (max-width: 1420px) {
    width: 70%;
  }
  @media (max-width: 920px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;
export const CubeWrapper = styled.div`
  background-image: ${({ confettiState }) => `url(${confettiState})`};
  background-size: 790px;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  user-select: none;
  padding: 135px;
  overflow: hidden;
  filter: drop-shadow(0px 2px 4px rgba(40, 41, 61, 0.04))
    drop-shadow(0px 8px 16px rgba(96, 97, 112, 0.16));

  @media (max-width: 1710px) {
    background-size: 775px;
  }
  @media (max-width: 1560px) {
    background-size: 630px;
  }

  @media (max-width: 1440px) {
    background-size: 580px;
  }
  @media (max-width: 1320px) {
    background-size: 530px;
  }
  @media (max-width: 1240px) {
    background-size: 480px !important;
  }
  @media (max-width: 920px) {
    background-size: 320px !important;
    background-position-y: top !important;
    padding: 65px !important;
  }
  @media (max-width: 375px) {
    padding: 95px 91px 95px 54px;
  }

  @media (max-height: 780px) {
    padding: 85px 135px;
  }
  @media (max-height: 660px) {
    padding: 100px 100px 60px 100px;
  }
  @media (max-height: 550px) {
    padding: 50px 138px 90px 100px !important;
  }

  @media (max-height: 920px) {
    background-size: 630px;
  }
  @media (max-height: 785px) {
    background-size: 440px;
    padding: 95px 135px;
  }
  @media (max-height: 615px) {
    background-size: 350px;
  }

  @media (min-width: 2000px) {
    padding: 180px;
  }
`;
export const CubeBox = styled.div`
  margin: auto;
  position: relative;
  height: 50vw;
  width: 50vw;
  max-width: 430px;
  max-height: 430px;
  transform-style: preserve-3d;
  animation: rotate 6s ease infinite;
  transform: translateZ(-200px) rotateX(-20deg)
    ${({ cubeRotateY }) => `rotateY(${cubeRotateY}deg)`};
  transition: transform 0.4s ease-out 0s;
  @media (max-width: 1560px) {
    max-width: 310px;
    max-height: 310px;
  }
  @media (max-width: 1240px) {
    max-width: 160px !important;
    max-height: 220px !important;
  }
  @media (max-width: 920px) {
    max-width: 160px !important;
    max-height: 30vh !important;
  }
  @media (max-width: 480px) {
    max-width: 140px;
    max-height: 100%;
    padding-bottom: 50px;
  }

  @media (max-height: 920px) {
    max-width: 310px;
    max-height: 310px;
  }
  @media (max-height: 785px) {
    max-width: 160px;
    max-height: 220px;
  }
  @media (max-height: 615px) {
    max-width: 160px;
    max-height: 30vh;
  }
`;

//CUBE TOP/CUBE SIDE
export const CubeSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid #fff;
  transform: ${({ spinParam }) => `${spinParam}`} translateZ(216px);

  @media (max-width: 1560px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(150px);
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1240px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(100px) !important;
    width: 200px !important;
    height: 200px !important;
  }

  @media (max-width: 920px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(75px) !important;
    width: 150px !important;
    height: 150px !important;
  }

  @media (max-height: 920px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(150px);
    width: 300px;
    height: 300px;
  }
  @media (max-height: 785px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(100px);
    width: 200px;
    height: 200px;
  }
  @media (max-height: 615px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(75px);
    width: 150px;
    height: 150px;
  }
`;

export const CubeItem = styled.label`
  ${({ currPosition, position }) =>
    currPosition &&
    currPosition === position &&
    `animation: shadowActive 1s alternate infinite;`};

  @keyframes shadowActive {
    from {
      filter: brightness(1);
    }

    to {
      filter: brightness(0.8);
    }
  }
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

  ${({ img }) => !img && "background-color:#f1f1ef;"}
  img {
    -webkit-user-drag: none;
    user-select: none;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  /* span {
    position: absolute;
    left: -113px;
    width: 110px;
    top: 113px;
    transform-origin: left top;
    height: 23vw;
    transform: translateX(12vw) rotate(317deg);
    line-height: 1.2;
    font-family: Mitr, sans-serif;
    text-align: center;
    overflow-wrap: break-word;
  } */
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
  font-family: "Objectivity";

  @media (max-width: 1560px) {
    font-size: 13px;
  }
  @media (max-width: 1240px) {
    font-size: 11px;
    width: 50%;
  }
  @media (max-width: 920px) {
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
`;
export const NoImage = styled.div`
  font-family: "Objectivity";
  position: absolute;
  top: 50%;
  left: 15%;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #f3328b;
  width: 100%;
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
  @media (max-width: 920px) {
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
  word-break: break-all;

  @media (max-width: 1240px) {
    font-size: 14px !important;
    top: 24% !important;
    width: 30%;
    left: 39%;
  }
  @media (max-width: 920px) {
    font-size: 12px !important;
    top: 15% !important;
    width: 40%;
    left: 31%;
  }

  @media (max-height: 920px) {
    font-size: 17px;
    top: 22%;
  }
  @media (max-height: 785px) {
    font-size: 12px;
    top: 22%;
    left: 32%;
  }
  @media (max-height: 615px) {
    font-size: 10px;
    top: 24%;
    left: 32%;
    width: 30%;
  }
`;

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
