import styled from 'styled-components';
import colors from '../../../utils/colors';

export const Navigation = styled.nav`
  background-color: ${colors.fauxGreen};
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LogoTitle = styled.h2`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
`;

export const LogoGreen = styled.span`
  color: ${colors.seaGreen};
`;

export const LogoWhite = styled.span`
  color: white;
`;
