import axios from "axios";

axios.defaults.baseURL = 'https://codeable-eatable-api.herokuapp.com/';

export const AxiosIndexProducts = () => {
  return axios('/products',{
    method: 'GET',
    headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

export const AxiosProductsId = (id) => {
  return axios(`/products/${id}`,{
    method: 'GET',
    headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
}