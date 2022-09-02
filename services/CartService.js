import ApiCaller from './ApiCaller/apiCaller'
import { API_BASE_URL } from '../constants/const';

export const getCartId = (url, data) => {
    return new Promise((resolve, reject) => {
            ApiCaller.post(API_BASE_URL + url, data)
            .then((response) => {
              
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
  export const getCartData = (url) => {
    return new Promise((resolve, reject) => {
            ApiCaller.get(API_BASE_URL + url)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
  export const addProductToCart = (url, data) => {
    return new Promise((resolve, reject) => {
            ApiCaller.put(API_BASE_URL + url, data)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
  export const sendOrder = (url, data) => {
    return new Promise((resolve, reject) => {
            ApiCaller.post(API_BASE_URL + url, data)
            .then((response) => {
              
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
