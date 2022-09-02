import React from 'react'
import { Pagination } from '../../components/subComponents/productListComponents/Pagination';
import { ProductList } from '../../components/subComponents/productListComponents/ProductList';

export default function Category() {
  return (
    <>
      <ProductList />
      <Pagination />
    </>
  )
}
