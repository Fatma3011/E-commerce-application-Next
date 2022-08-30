import React from 'react'
import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter();
    console.log(router.query.productId); 
  return (
    <div>Product</div>
  )
}
