import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { theme } from '../../utils/theme.utils';
import Grid from '@material-ui/core/Grid';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: linear-gradient(-45deg, #6d8eac, #6b6b83, #3b8d99);
  background-size: 400% 400%;
  -webkit-animation: gradient 30s ease infinite;
  animation: gradient 30s ease infinite;
`;

export const Container = styled.div`
  position: relative;
  width: 70%;
  margin: -100px auto 0;
  border-radius: 15px;
  padding-bottom: 50px;

  ${[theme.breakpoints.down('sm')]} {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  &:before {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    content: 'OR';
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    text-align: center;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: white;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 999;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);

    ${[theme.breakpoints.down('lg')]} {
      top: 35%;
    }

    ${[theme.breakpoints.down('sm')]} {
      display: none;
    }
  }
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    content: '';
    height: 100%;
    width: 0.12em;
    z-index: 900;
  }
  box-shadow: rgba(17, 17, 26, 0.05) 0 4px 16px, rgba(17, 17, 26, 0.05) 0 8px 32px;
`;

export const Title = styled.h2`
  color: #2d3748;
  margin-bottom: 30px;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  color: white;
  text-align: center;
`;

export const SocialGrid = styled(Grid)`
  padding: 30px 0;
`;

interface SocialSignUpProps {
  socialColor: string;
}

export const SocialSignUp = styled(Button)<SocialSignUpProps>`
  padding: 10px !important;
  margin-top: 10px !important;
  width: 60%;
  background-color: ${({ socialColor }) => socialColor} !important;
  color: white !important;
`;
