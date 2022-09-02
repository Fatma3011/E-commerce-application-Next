import React from 'react'
import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter();
    console.log("second",router.query.productId); 
  return (
    <div>Product</div>
  )
}
export async function getServerSideProps(context){
    const query = context.query;
    const {params, res, req}= context;
    console.log("first", query);
    return {props : {products :[{id:3, title:"title"}]}}
  }
