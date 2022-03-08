import styled from "styled-components";

export const SheetBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FontPageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 454px;
  height: 626px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(40, 41, 61, 0.04),
  0 8px 16px rgba(96, 97, 112, 0.16);
`

export const ActiveSheetDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const FrontSheetDiv = styled.div`
  width: 102px;
  height: 142px;

  background: #FFFFFF;
  ${({activeSheet}) => activeSheet && 'border: 4px solid #0A74FF;'}

  box-shadow: 0 2px 8px rgba(40, 41, 61, 0.04),
  0 16px 24px rgba(96, 97, 112, 0.16);
`;

export const DivSheetContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
`;

export const DivFlex = styled.div`
  display: flex;
  ${({activeSheet}) => activeSheet && 'border: 4px solid #0A74FF;'}
`;