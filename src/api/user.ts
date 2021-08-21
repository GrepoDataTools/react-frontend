import axios from 'axios';

export const signIn = (email: string, password: string) => {
  const formData = new FormData();
  formData.append('mail', email);
  formData.append('password', password);

  return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, formData).then((response) => response.data);
};

export const signUp = (email: string, username: string, password: string) => {
  const formData = new FormData();
  formData.append('mail', email);
  formData.append('username', username);
  formData.append('password', password);

  return axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData).then((response) => response.data);
};
