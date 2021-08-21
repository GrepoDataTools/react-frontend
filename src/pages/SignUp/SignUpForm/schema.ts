import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username cannot be empty'),
  email: yup.string().email('The email you entered is not valid').required('Email cannot be empty'),
  password: yup.string().min(8, 'Your password should have at least 8 characters').required('Password cannot be empty'),
  privacy: yup.boolean().isTrue('Accept our privacy and policy to continue'),
});

export default schema;
