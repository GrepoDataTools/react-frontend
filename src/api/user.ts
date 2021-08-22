import axios from 'axios';
import store from '../redux/store';
import { IndexListResponse } from '../types/Indexer';

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

export const getIndexes = (): Promise<IndexListResponse> => {
  const access_token = store.getState().user.information.accessToken;

  return axios
    .get(`${process.env.REACT_APP_API_URL}/profile/indexes?expand_overview=true`, { headers: { access_token } })
    .then((response) => response.data);
};
