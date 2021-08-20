import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('The email you entered is not valid').required('Email cannot be empty'),
  password: yup.string().required('Password cannot be empty'),
});

export default schema;
