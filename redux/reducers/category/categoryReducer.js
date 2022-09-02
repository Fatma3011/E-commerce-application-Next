import {
    SET_CARTEGORIES,
} from '../../actionTypes'

const initialState = {
    categories: [],
}

const categoryReducer = (state = initialState, action) => {
    if (action.type === SET_CARTEGORIES) {
            return {
                categories: action.categories,
            }
        }
    return {
        categories: state.categories,
    }
    }
export default categoryReducer