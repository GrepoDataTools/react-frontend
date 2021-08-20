import axios from 'axios';

export const signIn = (email: string, password: string) => {
  const formData = new FormData();
  formData.append('mail', email);
  formData.append('password', password);

  return axios
    .post(`${process.env.REACT_APP_API_URL}/auth/login`, formData, { headers: {} })
    .then((response) => response.data);
};
