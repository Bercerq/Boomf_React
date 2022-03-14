import styled from "styled-components";
export const MainWrapper = styled.div`
  display: flex;
  user-select: none;
  height: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    flex-direction: column;
    height: 100vh;
  }
`;
