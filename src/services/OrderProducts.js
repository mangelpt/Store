import axios from "axios";

axios.defaults.baseURL = 'https://codeable-eatable-api.herokuapp.com/';

export const OrderProducts = (data) => {
    return axios('/orders', {
            method: 'POST',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        }).then(function (response) {
          console.log(sessionStorage.getItem("token"));
          return response.data
        })
        .catch(function (error) {
          console.log(error.response);
        });
    }
    

export const ShowOrders = () => {
  return axios('/orders', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    }
    }).then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
}