import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getProductData } from '../../../services/ProductService';
import { AddToCartButton } from '../cartComponents/AddToCartButton'
export const ProductFP = (props) => {
    const {productId} = useRouter();
    const [nbToAdd, setnbToAdd] = useState(1);
    const [ productData, setProductData] = useState([]);
    
    let items; 
    let productItem ={}
    let result = [];
    let filteredProduct =  false;
    const crossedOutPrice=(price, discountRate)=>{
        var priceCrossed= price + (discountRate * price)/100;
        return priceCrossed;
    }
    useEffect(()=>{  
        items = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
            result = items.filter(item => {
                return item.id === props.product.id;
              });
            if (result.length == 0) {
                filteredProduct = true ;
            }
            else {
                filteredProduct = false ;
            }
            if (filteredProduct){
                productItem = {
                    discountRate: props.product.discountRate,
                    id: props.product.id,
                    imageName: props.product.imageName,
                    name: props.product.name,
                    review: props.product.review,
                    price: props.product.price
                 }
                items.push(productItem);
                localStorage.setItem('recentlyViewed', JSON.stringify(items));
            }      
        
    },[]);
    const inputHandler = event => {
        setnbToAdd(event.target.value);
    }
    return(
        <div className="product-content-right">
            <div className="product-breadcroumb">
                <a >Home</a>
                <a >Category Name</a>
                <a >{props.product.name}</a>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="product-images">
                        <div className="product-main-img">
                            <img src={`/assets/img/${props.product.imageName}`} alt />
                        </div>
                        <div className="product-gallery">
                            <img src={`/assets/img/${props.product.imageName}`} alt />
                            <img src={`/assets/img/${props.product.imageName}`} alt />
                            <img src={`/assets/img/${props.product.imageName}`} alt />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="product-inner">
                        <h2 className="product-name">{props.product.name}</h2>
                        <div className="product-inner-price">
                            <ins>${props.product.price}</ins> <del>${crossedOutPrice(props.product.price,props.product.discountRate)}</del>
                        </div>
                        <form action className="cart">
                            <div className="quantity">
                                <input type="number" size={4} 
                                className="input-text qty text" 
                                title="Qty" 
                                defaultValue={nbToAdd} 
                                value={nbToAdd}
                                name="quantity" min={1} step={1}
                                onChange={inputHandler} />
                            </div>
                            <AddToCartButton name = {props.product.name} price = {props.product.price} image = {props.product.imageName} id = {productId} nbToAdd={nbToAdd}/>
                            
                        </form>
                        <div className="product-inner-category">
                            <h2>Product Description</h2>
                            <p>{props.product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    
        );
};
