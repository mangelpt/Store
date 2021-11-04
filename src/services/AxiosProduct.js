import axios from "axios";

axios.defaults.baseURL = 'https://codeable-eatable-api.herokuapp.com/';

export const AxiosIndexProducts = () => {
  return axios('/products',{
    method: 'GET',
    headers: {Authorization: `Bearer MNd3Z9Gs1qNqdmSryh21cnua`}
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
}