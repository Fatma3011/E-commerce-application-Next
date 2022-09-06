import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link'
import { setCartData } from '../../redux/reducers/cart/cartActions';
import { getCartId } from '../../services/CartService';
import { useRouter } from 'next/router'

export const Header = (props) => {

    const router = useRouter();
    
    const [visibility, setVisibility] = useState(true);
    const dispatch = useDispatch();
    const [searchField, setSearchField] = useState('');
    if (typeof window !== 'undefined') {
        
    }

    const data = useSelector(state => state.cart);
    const totalQuantities = useSelector(state => state.cart.totalQuantities)
    let newCart = {
        "total": 0,
        "subTotal": 0,
        "tax": 0,
        "totalQuantities":0,
        "items": []
    };
    let searchWord = "";
    let cartId;
    if (typeof window !== 'undefined') {
         cartId =  localStorage.getItem('cartId');}
    useEffect(()=>{
        const url = "carts";
        if (!cartId){
            getCartId(url, newCart)
                .then(response => {
                    localStorage.setItem('cartId', response.id);
                    dispatch(setCartData(response.id));
            })
        }
        else{
            dispatch(setCartData(cartId));
        }

    },[cartId])

    const  formSubmitSearch = event => {
            searchWord = searchField;
            setSearchField("");
        if (searchField !== "")  {
            router.push(`/productList/search=${searchWord}`)
        }
  }

    const inputHandler = event => {
        setSearchField(event.target.value);
    }

    useEffect(()=>{
        if (router.pathname === "/cart"){
            setVisibility(false);
        }
        else {setVisibility(true);}
    }
    ,[router.pathname])

    return (
         <div>
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="logo" style={{ width: 100, height: 100 }}>
                                <h1>
                                    <Link href="/"><a><img alt ="" src="/assets/img/logo.png" /></a></Link>
                                </h1>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        {visibility &&
                                <>
                                    <input type="text" style={{ marginTop: 30 }} placeholder="Search products..." 
                                    onChange={inputHandler} 
                                    />
                                    <input type="button" 
                                    onClick={formSubmitSearch}  
                                    defaultValue="Search" />
                                </>
                        }
                        </div> 
                        <div className="col-sm-4">
                        {cartId && totalQuantities !== 0 &&
                            <div className="shopping-item">
                            <Link href="/cart">
                                    <a>
                                    Cart :  <span className="cart-amunt">
                                        {data.total} 
                                        €
                                        </span> 
                                        <i className="fa fa-shopping-cart" /> 
                                        <span className="product-count">
                                            {totalQuantities}
                                        </span>
                                    </a>
                            </Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
