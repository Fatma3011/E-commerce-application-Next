import { getCartId, getCartData, addProductToCart } from '../../../services/CartService';
import {
    SET_CART_ID,
    SET_CART_DATA,
} from '../../actionTypes'

export function setCartId() {
    const url = "carts";
    
    return function (dispatch) {
        getCartId(url)
            .then(response => {
                dispatch({
                    type: SET_CART_ID, id: response.id
                });
                getCartData(url + "/" + response.id).then(response => {
                    console.log("response cart Data", response)
                    dispatch({
                        type: SET_CART_DATA, data: response
                    });
                });
                
            })
            .catch((error) => {
                console.log("ERROR");
            })
    }

} 
export function setCartData(id) {
    const url = "carts/";

    return function (dispatch) {
        getCartData(url +id)
            .then(response => {  
                dispatch({
                    type: SET_CART_DATA, data: response
                });
            })
            .catch((error) => {
                console.log("ERROR");
            })
    }

}
export function putCartData(id, cart) {
    const url = "carts/";

    return function (dispatch) {
        addProductToCart(url+id, cart)
            .then(response => {  
                dispatch({
                    type: SET_CART_DATA, data: response
                });
            })
            .catch((error) => {
                console.log("ERROR");
            })
    }

}

