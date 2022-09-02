import { API_BASE_URL } from '../constants/const';
import ApiCaller from './ApiCaller/apiCaller'

export const getAllCategory = async (url) => {

    const data = await ApiCaller.get(API_BASE_URL + url)
    return data.data;

};
export const getProductByCategory = async (categoryId) => {

    const data = await ApiCaller.get(API_BASE_URL+'products-lists/' + categoryId)
    return data.data;
    
};