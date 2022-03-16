import styled from "styled-components";
export const MainWrapper = styled.div`
  display: flex;
  user-select: none;
  height: 100%;
  justify-content: space-between;
  background-color: #f5f5f5;
  position: fixed;
  width: 100%;
  @media (max-width: 1130px) {
    flex-direction: column;
  }
`;
