import styled from "styled-components";
export const LoginWindow = styled.div`
  width: 404px;
  @media (max-width: 505px) {
    width: 280px;
  }
`;

export const LoginDescription = styled.p`
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0.02em;
  color: #3d3d3d;
  padding-bottom: 32px;
  margin: 0;
`;

export const SocialWrapper = styled.div`
  padding-top: 36px;
  fieldset {
    border: none;
    text-align: center;
    border-top: 1px solid #d6d6d6;
    legend {
      font-family: "objectivity-regular-11", sans-serif;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.02em;
      color: #000000;
    }
  }
`;

export const TextArea = styled.textarea`
  font-family: "objectivity-regular-11", sans-serif;
  resize: none;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  letter-spacing: 0.02em;
  height: 108px;
  &::placeholder {
    color: #a3a3a3;
  }
`;
