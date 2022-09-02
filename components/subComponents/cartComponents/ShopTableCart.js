import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addProductToCart } from '../../../services/CartService';
import { putCartData } from '../../../redux/reducers/cart/cartActions';
// il reste le input
export const ShopTableCart = () => {
    const cartData = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let sameItem = [];
    let ancientItems = [];
    let data;
    const deleteFromCart = (e, id, name, image, price) => {
        e.preventDefault();
        data = {
            "id": id,
            "name": name,
            "imageName": image,
            "price": price,
            "qty": 1
        }
        sameItem = cartData.items.filter(item => {
            return item.id === id;
        });
        cartData.totalQuantities = cartData.totalQuantities - sameItem[0].qty; 
        cartData.subTotal = cartData.subTotal - price * sameItem[0].qty;
        cartData.total = cartData.subTotal - (cartData.subTotal * cartData.tax) / 100;
        ancientItems = cartData.items.filter(item => {
            return item.id !== data.id;
        });
        cartData.items = ancientItems;

        dispatch(putCartData(cartData.id,cartData));

    }
    const minus = (e, id, name, image, price) => {
        e.preventDefault();
        data = {
            "id": id,
            "name": name,
            "imageName": image,
            "price": price,
            "qty": 1
        }
        sameItem = cartData.items.filter(item => {
            return item.id === id;
        });
        cartData.totalQuantities = cartData.totalQuantities - 1; 
        cartData.subTotal = cartData.subTotal - price;
        cartData.total = cartData.subTotal - (cartData.subTotal * cartData.tax) / 100;
        sameItem[0].qty = sameItem[0].qty - 1;
        ancientItems = cartData.items.filter(item => {
            return item.id !== data.id;
        });
        if (sameItem[0].qty == 0) {
            
            cartData.items = ancientItems;

        }
        else{
            ancientItems.push(...sameItem);
            cartData.items = ancientItems;
        }

        dispatch(putCartData(cartData.id,cartData));

    }
    const plus = (e, id, name, image, price) => {
        e.preventDefault();
        data = {
            "id": id,
            "name": name,
            "imageName": image,
            "price": price,
            "qty": 1
        }
        sameItem = cartData.items.filter(item => {
            return item.id === id;
          });
        cartData.totalQuantities = cartData.totalQuantities + 1; 
        cartData.subTotal = cartData.subTotal+ price;
        cartData.total = cartData.subTotal + ( cartData.subTotal * cartData.tax)/100;
        if (sameItem.length == 0) {
            cartData.items.push(data);
        }
        else {
            ancientItems = cartData.items.filter(item => {
                return item.id !== data.id;
              });
            sameItem[0].qty = sameItem[0].qty + 1;
            ancientItems.push(...sameItem);
            cartData.items = ancientItems;
        }
        
        dispatch(putCartData(cartData.id,cartData));
        // addProductToCart("carts/"+ cartData.id, cartData).then((response) => {
        // })
    }
   
    return(
        <>
        
        {cartData.items.length === 0 ? <h1>Your Cart is empty</h1> : <table cellSpacing={0} className="shop_table cart">
            <thead>
                <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                </tr>
            </thead>
            <tbody>
                {cartData.items && cartData.items.map((item, index) => (
                    <tr className="cart_item" key={index}>
                        <td className="product-remove">
                            <a title="Remove this item" 
                                className="remove" 
                                href="#"
                                onClick={(e)=>{ deleteFromCart(e,item.id,  item.name, item.imageName, item.price)}}
                            >×</a>
                        </td>
                        <td className="product-thumbnail">
                            <a href="single-product.html">
                                <img width={145} height={145} alt="PIC" 
                                    className="shop_thumbnail" 
                                    src={`/assets/img/${item.imageName}`} 
                                />
                            </a>
                        </td>
                        <td className="product-name">
                        <Link href={`/product/${item.id}`}>{item.name}</Link>
                        </td>
                        <td className="product-price">
                            <span className="amount">{item.price}€</span>
                        </td>
                        <td className="product-quantity">
                            <div className="quantity buttons_added">
                                <input type="button" 
                                    className="minus" 
                                    defaultValue="-" 
                                    onClick={(e)=>{minus(e,item.id, item.name, item.imageName, item.price)}}
                                    />
                                <input type="number" size={4} className="input-text qty text" 
                                    title="Qty" 
                                    defaultValue={item.qty} 
                                    value={item.qty} 
                                    min={0} step={1} />
                                <input type="button" 
                                    className="plus" 
                                    defaultValue="+" 
                                    onClick={(e)=>{plus(e,item.id, item.name, item.imageName, item.price)}}
                                    />
                            </div>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">{item.price * item.qty} €</span>
                        </td>
                    </tr>
                ))}
                <tr>
                <td className="actions" colSpan={6}>
                        <Link href="/checkout">
                            <input type="button"
                                defaultValue="Checkout"
                                name="proceed"
                                className="checkout-button button alt wc-forward" />
                        </Link>

                    </td>
                </tr>
            </tbody>
        </table>}
        </>
        );
};
