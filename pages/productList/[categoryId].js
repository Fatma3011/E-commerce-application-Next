import React from 'react'
import { Pagination } from '../../components/subComponents/productListComponents/Pagination';
import { ProductList } from '../../components/subComponents/productListComponents/ProductList';
import { PageLayout } from "../../components/PageLayout";
import { getAllCategory } from '../../services/CategoryService'
import { getProductByCategory } from '../../services/CategoryService';
import { getProductsSearch } from '../../services/ProductService';

export default function Category(props) {
  return (
    <PageLayout categories={props.categories}>
      <ProductList products={props.products} title={props.title} />
      <Pagination />
    </PageLayout>
  )
}
export async function getServerSideProps(context) {
  const url = "categories";
  const { params } = context;
  let result = null;
  result = await getAllCategory(url)
    .then(response => {
      return response;
    })
    .catch((error) => {
      console.log("ERROR");
    });
  let products;
  let title;
  if (params.categoryId.includes("search")) {
    const searchWord = params.categoryId.substr(7);
    products = await getProductsSearch(searchWord)
      .then((result) => {
        title = `Search result of '${searchWord}'`;
        return result;
      })

  }
  else {
    products = await getProductByCategory(params.categoryId)
      .then((response) => {
        title = response.name
        return response.items
      })
  }
  return {
    props: {
      categories: result,
      products: products,
      title: title
    }
  }
}
