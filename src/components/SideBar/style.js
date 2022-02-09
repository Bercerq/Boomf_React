import styled from "styled-components";

export const SideBarWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(249, 249, 249, 0.84);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 3;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
  ${({ openSideBar }) => openSideBar && "opacity:1; pointer-events: all;"}
`;
export const SideBarContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
    0px 16px 24px rgba(96, 97, 112, 0.16);
  width: 0;
  transition: 0.5s;
  ${({ openSideBar }) => openSideBar && "width: 50vw"};
  height: 100vh;
  transition: 0.3s;
`;

export const SideBarTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 42px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #222222;
`;
export const Close = styled.div`
  cursor: pointer;
`;
