import React from 'react';
import { Form, Input, Label, HelperText, SignInText } from './SignUpForm.styled';
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import colors from '../../../utils/colors';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from '../../../redux/user/user.selector';
import { Alert } from '@material-ui/lab';
import { signUpStart } from '../../../redux/user/user.reducer';

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector(selectStatus);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const submitForm = (data: any) => dispatch(signUpStart(data));

  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <FormGroup>
          <Label htmlFor="username">Username (Public)</Label>
          <Input {...register('username')} error={errors.username} />
          <HelperText>
            <ErrorMessage errors={errors} name="username" />
          </HelperText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address (Private)</Label>
          <Input {...register('email')} error={errors.email} />
          <HelperText>
            <ErrorMessage errors={errors} name="email" />
          </HelperText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input {...register('password')} type="password" error={errors.password} />
          <HelperText>
            <ErrorMessage errors={errors} name="password" />
          </HelperText>
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color={'default'}
                defaultChecked={false}
                onChange={(e) => setValue('privacy', e.target.checked)}
              />
            }
            label={'By submitting this form you agree to our Privacy Policy'}
            {...register('privacy')}
          />
          <HelperText>
            <ErrorMessage errors={errors} name="privacy" />
          </HelperText>
        </FormGroup>
        {errorMessage && <Alert severity={'error'}>{errorMessage}</Alert>}
        <Button
          type="submit"
          variant="contained"
          style={{ background: 'white', color: colors.seaGreen }}
          disableElevation
        >
          {loading ? <CircularProgress size={20} /> : 'Sign In'}
        </Button>
        <SignInText>
          Already have an account?{' '}
          <Link to="/sign-in">
            Sign in <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </SignInText>
      </Form>
    </>
  );
};

export default SignUpForm;
