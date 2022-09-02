import { combineReducers} from "redux";
import categoryReducer from './reducers/category/categoryReducer';
import cartReducer from './reducers/cart/cartReducer';

const combinedReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
});

export default combinedReducer;

