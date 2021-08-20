import React from 'react';
import { Form, Input, Label, HelperText } from './SignInForm.styled';
import { CircularProgress, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import colors from '../../../utils/colors';
import { ErrorMessage } from '@hookform/error-message';
import { InferType } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart } from '../../../redux/user/user.reducer';
import { selectStatus } from '../../../redux/user/user.selector';
import { Alert } from '@material-ui/lab';

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector(selectStatus);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const submitForm = (data: InferType<typeof schema>) => dispatch(signInStart(data));

  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
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
        {errorMessage && <Alert severity={'error'}>{errorMessage}</Alert>}
        <Button
          type="submit"
          variant="contained"
          style={{ background: 'white', color: colors.seaGreen }}
          disabled={loading}
          disableElevation
        >
          {loading ? <CircularProgress size={20} /> : 'Sign In'}
        </Button>
      </Form>
    </>
  );
};

export default SignInForm;
