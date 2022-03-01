import styled from "styled-components";
import {ConfetiBox, ConfettiItem, ConfettiWrapper, Title} from "../style";


export const ConfettiWrapperCannonColumn = styled(ConfettiWrapper)`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 0 50px 0 40px;
`;

export const ConfettiWrapperCannon = styled(ConfettiWrapper)`
  padding: 0;
`;

export const ConfettiBoxCannon = styled(ConfetiBox)`
  display: flex;
  flex-direction: row;
  height: auto;
`;

export const ConfettiItemCannon = styled(ConfettiItem)`
  margin-right: 20px;
`;

export const TitleCannon = styled(Title)`
  text-align: start;
`;