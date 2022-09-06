import { OtherBrand } from '../../components/subComponents/FPComponents/OtherBrand';
import { ProductFP } from '../../components/subComponents/FPComponents/ProductFP';
import { RecentlyViewedForFP } from '../../components/subComponents/FPComponents/RecentlyViewedForFP';
import { PageLayout } from "../../components/PageLayout";
import { getAllCategory } from '../../services/CategoryService'
import { getProductData } from '../../services/ProductService';

export default function Product(props) {
  return (
    <PageLayout categories={props.categories}>
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <RecentlyViewedForFP />
              <OtherBrand />
            </div>
            <div className="col-md-8">
              <ProductFP product={ props.product} />

            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export async function getServerSideProps(context) {
  const query = context.query;
  // const { params, res, req } = context;
  let result = null;
  result = await getAllCategory("categories")
    .then(response => {
      return response;
    })
    .catch((error) => {
      console.log("ERROR");
    });
  console.log("first", query);

  const product = await getProductData(query.productId).then((response) => { return response})
  return {
    props: {
      categories: result,
      product: product
    }
  }
}
