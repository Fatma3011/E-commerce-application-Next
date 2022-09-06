import React from 'react'
import { PageLayout } from '../../components/PageLayout';
import { CartLayout } from '../../components/subComponents/cartComponents/CartLayout';
import { getAllCategory } from '../../services/CategoryService'

export default function CartPage(props) {
  return (
    <PageLayout categories = {props.categories}>
      <CartLayout/>
    </PageLayout>
  )
}
export async function getStaticProps(){
  const url = "categories";
  const result = await getAllCategory(url)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log("ERROR");
            });
  return {props : {categories: result || null}}
}