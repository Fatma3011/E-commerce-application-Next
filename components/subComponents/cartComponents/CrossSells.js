import React from 'react';
export const CrossSells = () => {
    return(
        <div className="cross-sells">
            <h2>You may be interested in...</h2>
            <ul className="products">
                <li className="product">
                    <a href="single-product.html">
                        <img width={325} height={325} alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="/assets/img/product-2.jpg" />
                        <h3>Ship Your Idea</h3>
                        <span className="price"><span className="amount">20.00 €</span></span>
                    </a>
                    <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={22} rel="nofollow" href="single-product.html">Add to Cart</a>
                </li>
                <li className="product">
                    <a href="single-product.html">
                        <img width={325} height={325} alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="/assets/img/product-4.jpg" />
                        <h3>Ship Your Idea</h3>
                        <span className="price"><span className="amount">20.00 €</span></span>
                    </a>
                    <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={22} rel="nofollow" href="single-product.html">Add to Cart</a>
                </li>
            </ul>
        </div>

    );
};
