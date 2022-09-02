import {useState, useEffect} from 'react';
export const RecentlyViewedForFP = () => {
    const [recentlyViewedProducts , setRecentlyViewedProducts] = useState([]);
    const crossedOutPrice=(price, discountRate)=>{
        var priceCrossed= price + (discountRate * price)/100;
        return priceCrossed;
    }
    useEffect(()=>{
        setRecentlyViewedProducts (JSON.parse(localStorage.getItem('recentlyViewed')));  
    }, [])
    return(
        recentlyViewedProducts &&<div className="single-sidebar">
            <h2 className="sidebar-title">Recently Viewed</h2>
            {recentlyViewedProducts && recentlyViewedProducts.map((item, index)=>(
                <div className="thubmnail-recent" key={index}>
                    <img src={`/assets/img/${item.imageName}`} className="recent-thumb" alt />
                    <h2><a href>{item.name}</a></h2>
                    <div className="product-sidebar-price">
                        <ins>{item.price} € </ins> <del>{crossedOutPrice(item.price, item.discountRate )} €</del>
                    </div>
                </div>
                )
            )
               
           }
        </div>

        );
};
