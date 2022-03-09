import styled from "styled-components";

export const ModalWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
  ${({ openSideBar }) => openSideBar && "opacity:1; pointer-events: all;"};
`;
export const ModalContent = styled.div`
  font-family: "objectivity-regular-11", sans-serif;
  padding: 40px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
    0px 16px 24px rgba(96, 97, 112, 0.16);
  width: 50vw;
  transition: 0.5s;
  transition: 0.3s;
`;

export const ModalTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 42px;
`;

export const Title = styled.div`
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #222222;
`;
export const Close = styled.div`
  cursor: pointer;
`;
