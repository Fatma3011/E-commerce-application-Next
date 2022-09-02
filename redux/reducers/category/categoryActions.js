import { getAllCategory } from '../../../services/CategoryService';
import {
    SET_CARTEGORIES,
} from '../../actionTypes'

export function setCategories() {
    const url = "categories";    
    return function (dispatch) {
        getAllCategory(url)
            .then(response => {
                dispatch({
                    type: SET_CARTEGORIES, 
                    categories: response
                });
            })
            .catch((error) => {
                console.log("ERROR");
            })
    }

}