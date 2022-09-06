import React from 'react'
import { PageLayout } from '../../components/PageLayout'
import CheckoutBody from '../../components/subComponents/checkoutComponents/checkoutBody'
import {getAllCategory} from '../../services/CategoryService'

export default function CheckoutPage(props) {
  return (
    <PageLayout categories = {props.categories}>
      <CheckoutBody/>
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