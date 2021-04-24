import styled from 'styled-components';
import colors from '../../utils/colors';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
  border-radius: 15px;
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
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 50%,
      rgba(24, 188, 156, 1) 50%,
      rgba(24, 188, 156, 1) 100%
    );
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 999;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    content: '';
    background: rgba(128, 128, 128, 0.3);
    height: 100%;
    width: 0.12em;
    z-index: 900;
  }
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

export const Title = styled.h2`
  color: ${colors.seaGreen};
  margin: auto;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 50px;
`;

export const EmailSignUp = styled.div``;

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
