import React, { useEffect, useState } from "react";
import { getTopProducts } from "../../../services/ProductService";
import { ProductElement } from "./ProductElement";
import useSWR from 'swr';

export const TopProduct = (props) => {
    const [topSellers, setTopSellers] = useState([]);
    const [topNew, setTopNew] = useState([]);
    const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
    // const { data, error } = useSWR('http://localhost:3002/api/topProduct/topseller');
    //   console.log(error)
    useEffect(() => {
        getTopProducts("top-sellers-products").then((response) => {
            setTopSellers(response);
        });
        getTopProducts("top-new-products").then((response) => {
            setTopNew(response);
        });
        setRecentlyViewedProducts(
            JSON.parse(localStorage.getItem("recentlyViewed"))
        );
    }, []);
    // useEffect(() => {
    //     if(data){
    //         setTopSellers(data)
    //     }
    // }, [data]);
    return (
        <div className="product-widget-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <ProductElement
                        title="Top Sellers"
                        products={topSellers}
                    />
                    <ProductElement
                        title="Recently Viewed"
                        products={recentlyViewedProducts}
                    />
                    <ProductElement
                        title="Top New"
                        products={topNew}
                    />
                </div>
            </div>
        </div>
    );
};
