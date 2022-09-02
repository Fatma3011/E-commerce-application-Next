import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../../../services/ProductService';
import { AddToCartButton } from '../cartComponents/AddToCartButton'
export const ProductFP = () => {
    const {productId} = useParams();
    const [nbToAdd, setnbToAdd] = useState(1);
    const [ productData, setProductData] = useState([]);
    const cartId = localStorage.getItem("cartId");
    const items = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    let productItem ={}
    let result = [];
    let filteredProduct =  false;
    const crossedOutPrice=(price, discountRate)=>{
        var priceCrossed= price + (discountRate * price)/100;
        return priceCrossed;
    }
    useEffect(()=>{
        getProductData(productId).then((response)=>{
            setProductData(response);
            result = items.filter(item => {
                return item.id === response.id;
              });
            if (result.length == 0) {
                filteredProduct = true ;
            }
            else {
                filteredProduct = false ;
            }
            if (filteredProduct){
                productItem = {
                    discountRate: response.discountRate,
                    id: response.id,
                    imageName: response.imageName,
                    name: response.name,
                    review: response.review,
                    price: response.price
                 }
                items.push(productItem);
                localStorage.setItem('recentlyViewed', JSON.stringify(items));
            }      
        })
    },[]);
    const inputHandler = event => {
        setnbToAdd(event.target.value);
    }
    return(
        <div className="product-content-right">
            <div className="product-breadcroumb">
                <a href>Home</a>
                <a href>Category Name</a>
                <a href>{productData.name}</a>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="product-images">
                        <div className="product-main-img">
                            <img src={`/assets/img/${productData.imageName}`} alt />
                        </div>
                        <div className="product-gallery">
                            <img src={`/assets/img/${productData.imageName}`} alt />
                            <img src={`/assets/img/${productData.imageName}`} alt />
                            <img src={`/assets/img/${productData.imageName}`} alt />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="product-inner">
                        <h2 className="product-name">{productData.name}</h2>
                        <div className="product-inner-price">
                            <ins>${productData.price}</ins> <del>${crossedOutPrice(productData.price,productData.discountRate)}</del>
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
                            <AddToCartButton cartId={cartId} name = {productData.name} price = {productData.price} image = {productData.imageName} id = {productId} nbToAdd={nbToAdd}/>
                            
                        </form>
                        <div className="product-inner-category">
                            <h2>Product Description</h2>
                            <p>{productData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    
        );
};
