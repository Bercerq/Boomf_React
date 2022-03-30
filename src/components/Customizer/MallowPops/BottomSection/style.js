import styled from "styled-components";
export const FrontSheetDiv = styled.div`
  width: 54px;
  height: 54px;
  background: #d6d6d6;
  border: 4px solid transparent;
  cursor: pointer;
  ${({ activeSheet }) => activeSheet && "border: 4px solid #0A74FF;"};
  margin: 0 7.5px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
`;
export const ColumnActiveSheet = styled.div`
  position: absolute;

  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 10px;
  @media (max-width: 1130px) {
    position: fixed;
    bottom: 100px;
  }
`;
