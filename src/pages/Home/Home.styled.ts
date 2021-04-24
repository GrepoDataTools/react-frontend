import styled from 'styled-components';
import colors from '../../utils/colors';
import { theme } from '../../utils/theme.utils';
import Button from '@material-ui/core/Button';

export const ContentContainer = styled.div`
  padding: 50px 50px 100px 50px;
  margin: auto;

  ${[theme.breakpoints.up('lg')]} {
    width: 65%;
  }
  ${[theme.breakpoints.between(theme.breakpoints.values.xs, theme.breakpoints.values.lg)]} {
    width: 80%;
  }
`;

export const HeroContainer = styled.div`
  height: 400px;
  width: 100%;
  background: linear-gradient(-45deg, #6d8eac, #6b6b83, #3b8d99);
  background-size: 400% 400%;
  -webkit-animation: gradient 30s ease infinite;
  animation: gradient 30s ease infinite;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogoTitle = styled.h2`
  font-size: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-bottom: 2rem;
`;

export const LogoGreen = styled.span`
  color: ${colors.seaGreen};
`;

export const LogoWhite = styled.span`
  color: white;
`;

export const LogoSubtitle = styled.h5`
  color: white;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 200;

  ${[theme.breakpoints.down('md')]} {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const ContactUsButton = styled(Button)`
  margin: 80px 0 !important;
  color: white !important;
`;
