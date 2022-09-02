import { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { ViewAllButton } from './ViewAllButton';

export const ProductElement = (props) => {
    const [viewAll, setViewAll] = useState(false);
    const {products, title}=props;  
    let listItem = [];

   
    const callback = (name) => {
        if(name){
            setViewAll(!viewAll);
        }
    }
    useEffect(()=>{},[viewAll]);
    return(
        <div className="col-md-4">
            <div className="single-product-widget">
                <h2 className="product-wid-title">{title}</h2>
                <ViewAllButton onClick={callback} />
                {products &&  products.map((item, index) => {
                    if(viewAll){
                        return <ProductItem key={index} index={index} item={item}/>
                    }
                    if(!viewAll && index < 3){
                        return <ProductItem key={index} index={index} item={item}/>
                    }
                }
                    )}
            </div>
        </div>
    );
};
