import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

export const CartTotals = () => {
    const navigate = useNavigate();
    const cartData = useSelector(state => state.cart);
    useEffect(()=>{},[cartData])
    return(
        cartData.items.length !== 0 ?
            <div className="cart_totals ">
                <h2>Cart Totals</h2>
                <table cellSpacing={0}>
                    <tbody>
                        <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td><span className="amount">{cartData.subTotal} €</span></td>
                        </tr>
                        <tr className="shipping">
                            <th>Taxe (20%)</th>
                            <td>{cartData.tax} €</td>
                        </tr>
                        <tr className="order-total">
                            <th>Order Total</th>
                            <td><strong><span className="amount">{cartData.total} €</span></strong> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            : null


        );
};
