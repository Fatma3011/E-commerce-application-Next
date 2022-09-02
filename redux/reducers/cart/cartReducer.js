import {
    SET_CART_ID,
    SET_CART_DATA,
} from '../../actionTypes'

const initialState = {
    id: "",
    total: 0,
    subTotal: 0,
    tax: 0,
    totalQuantities: 0,
    items: [],

}

const cartReducer = (state = initialState, action) => {
    if (action.type === SET_CART_ID) {
        return {
            id: action.id,
            total: state.data.total,
            subTotal: state.data.subTotal,
            tax: state.data.tax,
            totalQuantities: state.data.totalQuantities,
            items: state.data.items
        }
    }
    if (action.type === SET_CART_DATA) {
        return {
            id: action.data.id,
            total: action.data.total,
            subTotal: action.data.subTotal,
            tax: action.data.tax,
            totalQuantities: action.data.totalQuantities,
            items:  action.data.items,
        }
    }
    return {
        id: state.id,
        total: state.total,
        subTotal: state.subTotal,
        tax: state.tax,
        totalQuantities: state.totalQuantities,
        items: state.items
    }
}
export default cartReducer