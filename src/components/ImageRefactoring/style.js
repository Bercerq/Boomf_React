import styled from "styled-components";

export const ImageRefactoringContent = styled.div`
  width: fit-content;
  height: fit-content;
  
  z-index: 1;
`;

export const ImageBlock = styled.img`
  padding: 5px;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
`;

export const BoxContainerImage = styled.div`
  position: relative;
  width: 100%;
  ${({activeState}) => activeState ? `border: 2px solid #0A74FF;` : ''};
  image {
    pointer-events: none; 
  }
  &:active {
    cursor: all-scroll;
  }
`;