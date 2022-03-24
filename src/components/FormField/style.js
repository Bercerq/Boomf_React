import styled from "styled-components";
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
// export const TextField = styled.input`
//   position: relative;
//   font-family: "objectivity-regular-11", sans-serif;
//   font-weight: 400;
//   font-size: 16px;
//   letter-spacing: 0.02em;
//   padding: 14px;
//   border: 1px solid #d6d6d6;
//   box-sizing: border-box;
//   border-radius: 4px;
//   outline: none;
//   margin-bottom: 12px;
//   width: 100%;
//   &::placeholder {
//     color: #a3a3a3;
//     opacity: 0.8;
//   }
// `;
export const FieldWrapper = styled.div`
  position: relative;
  img {
    ${({ eyeState }) => eyeState && `filter: brightness(0.1);`}
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition: 0.3s;
    }
    transition: 0.3s;
    position: absolute;
    right: 14px;
    top: 20px;
    width: 19px;
  }

  div {
    position: relative;
    font-family: "objectivity-regular-11", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.02em;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    margin-bottom: 12px;
    width: 100%;
    &::placeholder {
      color: #a3a3a3;
      opacity: 0.8;
    }
    &:first-child {
      margin-bottom: 12px;
    }
  }
  p {
    position: absolute;
    bottom: -10px;
  }
`;
