import styled from 'styled-components';
import FormHelperText from '@material-ui/core/FormHelperText';
import { theme } from '../../../utils/theme.utils';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 70px;

  ${[theme.breakpoints.down('sm')]} {
    padding: 20px 30px;
  }

  & > div {
    padding-bottom: 10px;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 10px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  outline: none;
  display: block;
  height: 45px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: ${({ error }) => (error ? '2px solid #8b0000' : 0)};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
  background: #86d4c0;
`;

export const HelperText = styled(FormHelperText)`
  font-weight: bold !important;
  color: #8b0000 !important;
`;

export const SignInText = styled.span`
  padding-top: 20px;
  text-align: center;

  ${[theme.breakpoints.down('sm')]} {
    padding-bottom: 20px;
  }
`;
