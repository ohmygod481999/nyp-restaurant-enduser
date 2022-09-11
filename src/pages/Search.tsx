import { useState } from "react"
import { useQuery } from "@apollo/client"
import { SEARCH_PRODUCT } from "./../requests/search"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"

interface iProduct {
    price: number
    thumbnail: string
    name: string
    description: string
    id: number
    order_count: number
    product_category: {
        id: number;
        name: string;
    }
  }

export default function Search() {

    let { keyword } = useParams()
    let { data, loading, error } = useQuery(SEARCH_PRODUCT, { variables: { keyword } })


    return <div>
        <Header />
        <div className="most_popular p-3">
            <div className="row">

                {data?.product?.map((item: iProduct, index: number) => <Product key={index} data={item} />)}

            </div>
        </div>
        <Footer />
    </div>
}