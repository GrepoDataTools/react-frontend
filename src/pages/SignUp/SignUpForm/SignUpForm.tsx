import React from 'react';
import { Form, Input, Label, HelperText } from './SignUpForm.styled';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import colors from '../../../utils/colors';
import { ErrorMessage } from '@hookform/error-message';

const SignUpForm: React.FC = () => {
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

  const submitForm = (data: any) => console.log(data);

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
            control={<Checkbox color={'default'} onChange={(e) => setValue('privacy', e.target.checked)} />}
            label={'By submitting this form you agree to our Privacy Policy'}
            {...register('privacy')}
          />
          <HelperText>
            <ErrorMessage errors={errors} name="privacy" />
          </HelperText>
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          style={{ background: 'white', color: colors.seaGreen }}
          disableElevation
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
