import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import { getProductByCategory } from '../../../services/CategoryService';
import { ProductCard } from './ProductCard';
import { Title } from '../../common/Title';
import { useRouter } from 'next/router'

export const ProductList = (props) => {

  // const router = useRouter();
  // const { categoryId } = router.query;
  // const [products, setProducts] = useState([]);
  // const [title, setTitle] = useState("");
  // useEffect(() => {
  //   if ( categoryId.includes("search")){
  //     const searchWord = categoryId.substr(7);
  //     getProductsSearch(searchWord).then(function(result) {
  //       setProducts(result); 
  //       setTitle(`Search result of '${searchWord}'`);
  //    })
  //   }
  //   // else{
  //   //   getProductByCategory(categoryId).then((res) => { 
  //   //     setProducts(res.items); 
  //   //     setTitle(res.name) })
  //   //     .catch((err)=>{router.push("/404")})
  //   // }
    
  // }, [categoryId])

  return (
    <>
      <Title categoryName={props.title} />
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
        <div className='row'>
          {props.products?.map((item, index) => (
              <ProductCard categoryName={props.title} id={item.id}
              image={item.imageName}
              name={item.name}
              price={item.price}
              review={item.review}
              discountRate={item.discountRate}
              key={index}
            />
              ))
            }
             </div>
        </div>
      </div>
    </>

  );
};
