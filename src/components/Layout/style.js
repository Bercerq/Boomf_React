import styled from "styled-components";
export const MainWrapper = styled.div`
  display: flex;
  user-select: none;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 1130px)  {
    flex-direction: column;
    height: 85vh;
  }
`;
