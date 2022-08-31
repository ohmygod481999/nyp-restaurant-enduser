import { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_TOP_TRENDING } from "./../requests/trending"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"

interface iProduct {
    price: number
    thumbnail: string
    name: string
    id: number
    order_count: number
}

export default function Trending() {

    let { keyword } = useParams()
    let { data, loading, error } = useQuery(GET_TOP_TRENDING)

    console.log(data)

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