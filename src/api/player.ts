import axios from 'axios';

export const getInfo = (market: string, id: string) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/player/info?world=${market}&id=${id}&a_name=true`)
    .then((response) => response.data);
};
