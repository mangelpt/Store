import axios from "axios";

axios.defaults.baseURL = 'https://codeable-eatable-api.herokuapp.com/';

export const AxiosShowUser = () => {
  return axios('/profile',{
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

export const AxiosUpdateUser = (forminfo) => {

  // let forminfo = new FormData();
  // forminfo.append("name", "hola");
  // forminfo.append("phone", "999888777");
  // forminfo.append("address", "av calle 3");

  return axios('/profile', {
    method: 'PATCH',
    data: forminfo,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });

}