import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_CATEGORY_ID } from "../requests/products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import DishFilter from "../components/DishFilter";
import { GET_DETAIL_CATEGORY } from "../requests/category";
interface iProduct {
  price: number;
  thumbnail: string;
  name: string;
  description: string;
  id: number;
  order_count: number;
  product_category: {
      id: number;
      name: string;
  }
}

export default function Products() {

    const params = useParams();
    const { data } = useQuery(GET_DETAIL_CATEGORY, {
        variables: { category_id: params.cid },
    });
    const [dialog, showDialog] = useState<boolean>(true);

    setTimeout(() => showDialog(false), 3000);

    return (
        <div>
            <Header />
            <DishFilter />
            <div className="px-3 pb-3 title d-flex align-items-center">
                <h5 className="m-0 pt-3">{data?.product_category_by_pk.name}</h5>
            </div>
            <div className="most_popular p-3">
                {data?.product_category_by_pk.products &&
                    data?.product_category_by_pk.products.length === 0 && (
                        <div className="text-center">Trống</div>
                    )}
                <div className="row">
                    {data?.product_category_by_pk.products?.map(
                        (item: iProduct, index: number) => (
                            <Product key={index} data={item} />
                        )
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
