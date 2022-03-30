import styled from "styled-components";

export const SheetContentPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const SheetBlock = styled(SheetContentPage)`
  justify-content: start;
`;
export const TitleStandard = styled.h3`
  margin: 30px;
  font-family: Objectivity, serif;
  font-style: normal;
  
  @media (max-width: 540px) and (max-height: 720px), 
  screen and (max-height: 1024px) and (max-width: 800px), 
  screen and (max-width: 1280px) and (max-height: 800px) {
    margin: 10px;
  }
`;
export const FontPageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1200px) {
    width: fit-content;
    height: auto;
  }
`;

export const DivSheets = styled.div`
  display: flex;
  justify-content: center;
`;

export const SheetContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({type}) => type === 'Flutter' ? '#D6D6D6' : '#FFFFFF'};

  overflow: hidden;
  
  z-index: 2;
  margin-top: 10px;
  width: fit-content;
  height: fit-content;

  box-shadow: 0 2px 4px rgba(40, 41, 61, 0.04),
  0 8px 16px rgba(96, 97, 112, 0.16);

  @media (min-width: 1440px) and (max-height: 920px) {
    height: 480px;
  }
  @media (max-width: 1280px) {
    margin: 22px;
  }
  @media (max-width: 540px) and (max-height: 720px) {
    margin: 10px 20px;
  }
`;

export const SheetContainerFrontPage = styled(SheetContainer)`
  background: ${({type}) => type === 'Flutter' ? '#D6D6D6' : '#FFFFFF'};
  transition-duration: ${({firstLoading}) => firstLoading ? '1s' : '0s'};
  transform: translate(${({standardName}) => standardName ? 0 : '-150vw'}, 0);
`;

export const DivStandardInside = styled.div`
  position: absolute;

  display: flex;
  overflow: hidden;

  transition-duration: 1s;
  transform: translate(${({standardName}) => standardName ? '0' : '150vw'}, 0);
  
  @media (max-width: 920px) {
    transform: translate(${({standardName}) => standardName ? '0' : '150vw'}, 0);
  }
  
  ${({focusState}) => focusState && `z-index: 4;`}
`;

export const TextContentStandard = styled.div`
  position: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 454px;
  height: 626px;

  @media (min-width: 1440px) and (max-height: 920px) {
    width: 350px;
    height: 480px;
  }

  @media (max-height: 1024px) and (max-width: 800px),
  screen and (max-width: 1280px) and (max-height: 800px) {
    width: 290px;
    height: 400px;
  }
  
  @media (max-width: 540px) {
    width: 329px;
    height: 454px;
  }
  
  @media screen and (max-width: 1130px),
  screen and (max-height: 605px),
  screen and (max-width: 540px) and (max-height: 720px) {
    width: 257px;
    height: 365px;
  }
`;

export const LineDivStandard = styled.div`
  height: 100%;
  //todo temporary solution
  z-index: ${({zIndexPos}) => zIndexPos ? 1 : '4; height: 100vh; position: absolute;'};
  border: 1px solid #A3A3A3;
`;

export const ColumnActiveSheet = styled.div`
  position: absolute;
  
  display: flex;
  flex-direction: column;

  bottom: 0;
  left: 0;
  width: 100%;
  @media (max-width : 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 10px;
    width: 100%;
  }
  @media (max-width: 1130px) {
    position: static;
  }
  @media (max-width: 540px) {
    align-items: flex-end;
    justify-content: center;
    margin: 16px;
  }
`;
export const ActiveSheetDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const FrontSheetDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 102px;
  height: 142px;

  background: #FFFFFF;
  ${({activeSheet}) => activeSheet && 'border: 4px solid #0A74FF;'};

  box-shadow: 0 2px 8px rgba(40, 41, 61, 0.04),
  0 16px 24px rgba(96, 97, 112, 0.16);
  @media (max-height: 1024px) and (max-width: 800px), 
  screen and (max-width: 1280px) and (max-height: 800px),
  screen and (max-width: 540px) {
    width: 54px;
    height: 75px;
  }
`;

export const FrontDblSheet = styled(FrontSheetDiv)`
  display: flex;
  justify-content: center;
  width: 204px;
  height: 144px;

  @media (max-height: 1024px) and (max-width: 800px),
  screen and (max-width: 1280px) and (max-height: 800px),
  screen and (max-width: 540px) {
    width: 109px;
    height: 75px;
  }
`;

export const DivSheetContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
  @media (max-width: 540px) {
    margin: 0 8px;
    span {
      display: none;
    }
  }
`;

export const DivFlex = styled.div`
  display: flex;
  z-index: 0;
  ${({activeSheet}) => activeSheet && 'border: 4px solid #0A74FF;'}
`;

export const SheetDivFlex = styled(DivFlex)`
  @media (max-width: 1200px) {
    &::-webkit-scrollbar {
      display: none;
    }

    overflow: auto hidden;
    width: 100vw;
  }
  @media (max-height: 1024px) and (max-width: 800px), screen and (max-width: 1280px) and (max-height: 800px) {
    justify-content: center;
  }
  @media (max-width: 920px) {
    justify-content: flex-start;
  }
`;

export const TitleNameSheet = styled.span`
  font-family: Objectivity, serif;
  margin: 18px 0;
  font-style: normal;
`;