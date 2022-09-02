import Axios from 'axios';
import { API_BASE_URL } from '../../constants/const.js';

const ApiCaller = Axios.create({
    baseURL: API_BASE_URL
});
export default ApiCaller