import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOP_TRENDING } from "./../requests/trending";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

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
    };
}

export default function Trending() {
    let { company_id, branch_id, table_id } = useParams();
    let { keyword } = useParams();
    let { data, loading, error } = useQuery(GET_TOP_TRENDING, {
        variables: {
            company_id,
        },
    });

    console.log(data);

    return (
        <div>
            <Header />
            <div className="px-3 title d-flex align-items-center">
                <h5 className="m-0 pt-3">Các món ăn nổi bật</h5>
            </div>
            <div className="most_popular p-3">
                <div className="row">
                    {data?.product?.map((item: iProduct, index: number) => (
                        <Product key={index} data={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
