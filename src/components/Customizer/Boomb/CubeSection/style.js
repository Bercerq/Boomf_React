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
  @media (max-width: 920px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;
export const CubeWrapper = styled.div`
  background-image: ${({ selectConfetti }) => `url(${selectConfetti.img})`};
  position: relative;
  user-select: none;
  padding: 135px;
  @media (max-width: 920px) {
    padding: 100px 100px 0 100px;
  }

  overflow: hidden;
  filter: drop-shadow(0px 2px 4px rgba(40, 41, 61, 0.04))
    drop-shadow(0px 8px 16px rgba(96, 97, 112, 0.16));
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
    max-width: 160px;
    max-height: 220px;
  }
  @media (max-width: 920px) {
    max-width: 160px;
    max-height: 100%;
  }

  @media (max-width: 480px) {
    max-width: 140px;
    max-height: 100%;
    padding-bottom: 50px;
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
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(100px);
    width: 200px;
    height: 200px;
  }
  @media (max-width: 920px) {
    transform: ${({ spinParam }) => `${spinParam}`} translateZ(75px);
    width: 150px;
    height: 150px;
  }
`;

export const CubeItem = styled.label`
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
  span {
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
  }
`;
export const BoxInfoSide = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 160px;
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
export const TopText = styled.span`
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
  color: black;
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
