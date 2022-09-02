import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../../services/CategoryService';
import { ProductCard } from './ProductCard';
import { Title } from './Title';
export const ProductListLayout = () => {
  
  const {categoryId}= useParams();

  const [productByCategory, setProductByCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  

  useEffect(()=>{
    getProductByCategory(categoryId).then((res)=>{setProductByCategory(res.items);setCategoryName(res.name)})
    
  }, [])


  return (
    <>
      <Title categoryName={categoryName}/>
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
        
          {productByCategory !== [] && productByCategory.map((item, index)=>(
            <>
            {(index % 4) ? <div className='row'></div> : null}
            <div className="col-md-3 col-sm-6">
                      <ProductCard categoryName={categoryName} id={item.id} 
                                    image={item.imageName} 
                                    name={item.name} 
                                    price={item.price} 
                                    review={item.review} 
                                    discountRate={item.discountRate}
                      />
            </div>
            </>
            
          )
          )}
        </div>
      </div>
    </>
    
  );
};
