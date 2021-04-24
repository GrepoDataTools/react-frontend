import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username cannot be empty'),
  email: yup.string().email('The email you entered is not valid').required('Email cannot be empty'),
  password: yup.string().required('Password cannot be empty'),
  privacy: yup.boolean().isTrue('Accept our privacy and policy to continue'),
});

export default schema;
