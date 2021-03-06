import axios from "axios";

axios.defaults.baseURL = 'https://codeable-eatable-api.herokuapp.com/';

export const AxiosLogin = (data) => {
  return axios('/login',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: data
  })
    .then(function (response) {
      sessionStorage.setItem('token', JSON.stringify(response.data.token));
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

export const AxiosSignUp = (data) => {
  return axios('/profile',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: data
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
}