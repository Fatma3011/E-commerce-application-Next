import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HomePage(props) {
  const router = useRouter();
  const load = ()=>{
    router.push("/cart/");
  }
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/product/product-list">List of products</Link>
      <button onClick={load}>Click</button>
      <ul>
        {props.products.map(product=>(<li key={product.id}>{product.title}</li>))}
      </ul>
    </div>
  )
};

export async function getStaticProps(){
  return {props : {products :[{id:3, title:"title"}]}}
}