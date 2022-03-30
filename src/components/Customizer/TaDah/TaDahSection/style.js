import styled from "styled-components";
import {TitleStandard} from "../../Standard/SheetSection/style";

export const TitleTaDah = styled(TitleStandard)`
  display: ${({titleDevice}) => titleDevice === 'desktop' ? 'block' : 'none'};

  @media (max-width: 1130px) {
    display: ${({titleDevice}) => titleDevice === 'desktop' ? 'none' : 'block'};;
    text-align: center;
    order: -1;
  }
`;

export const FrontSheetsTaDah = styled.div`
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(40, 41, 61, 0.04),
  0 16px 24px rgba(96, 97, 112, 0.16);
  ${({activeSheet}) => activeSheet && 'border: 4px solid #0A74FF;'};
`;

export const FrontDblSheetTaDah = styled(FrontSheetsTaDah)`
  display: flex;
  justify-content: center;
  width: 284px;
  height: 142px;
  background: ${({type}) => type === 'Flutter' ? '#D6D6D6' : '#FFFFFF'};
  
  @media (max-height: 1024px) and (max-width: 800px),
  screen and (max-width: 1280px) and (max-height: 800px),
  screen and (max-width: 540px) {
    width: 109px;
    height: 54px;
  }
`;

export const FrontSheetTaDah = styled(FrontSheetsTaDah)`
  width: 142px;
  height: 143px;
  
  background: ${({type}) => type === 'Flutter' ? '#D6D6D6' : '#FFFFFF'};
  ${({activeSheet}) => activeSheet && 'border: 4px solid #0A74FF;'};
  
  @media (max-height: 1024px) and (max-width: 800px),
  screen and (max-width: 1280px) and (max-height: 800px),
  screen and (max-width: 540px) {
    width: 54px;
    height: 54px;
  }
`;

export const TextContentTaDah = styled.div`
  position: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 548px;
  height: 548px;

  @media (min-width: 1440px) and (max-height: 920px) {
    width: 350px;
    height: 350px;
  }

  @media (max-height: 1024px) and (max-width: 800px),
  screen and (max-width: 1280px) and (max-height: 800px) {
    width: 290px;
    height: 290px;
  }

  @media (max-width: 540px) {
    width: 329px;
    height: 329px;
  }

  @media (max-width: 540px) and (max-height: 720px) {
    width: 257px;
    height: 257px;
  }
`;

export const ConfettiTaDahImg = styled.img`
  position: absolute;
  height: 80%;
  z-index: -2;
  transition: 1s;

  @media (max-width: 1130px) {
    bottom: 0;
    right: -30px;
  }
  @media (max-width: 920px) { 
    height: auto;
    width: 100%;
    bottom: -10%;
    right: -30%;
  }
  @media (max-width: 540px) {
    bottom: 10%;
  }
`;