import React from "react";
import Link from "next/link";
import { Carrousel } from "../components/subComponents/homeComponents/Carrousel";
import { Promo } from "../components/subComponents/homeComponents/Promo";
import { Brands } from "../components/subComponents/homeComponents/Brands";
import { useRouter } from "next/router";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Navigation } from "../components/common/Navigation";
import { TopProduct } from "../components/subComponents/homeComponents/TopProduct";
import { PageLayout } from "../components/PageLayout";
import {getAllCategory} from '../services/CategoryService'
import Head from 'next/head'

export default function HomePage(props) {
  const router = useRouter();
  const load = () => {
    router.push("/cart/");
  };
  return (
    <PageLayout categories = {props.categories}>
      <Head>
        <title>Phones Store</title>
      </Head>
      <Carrousel />
      <Promo />
      <Brands />
      <TopProduct />
    </PageLayout>
  );
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
    console.log(result)
  return {props : {categories: result}}
}
//*************** */
// context parameter to get the parameter from url
// revalidate key
// notFound key
// redirect key : si par exemple on n'a pas trouvé les données
// export async function getStaticProps(context){
//   return {props : {products :[{id:3, title:"title"}]}
//          revalidate : 10,
//          redirect: {destination: 'jfjsj'},
//          notFound: true
// }
// }
//  *****************************
