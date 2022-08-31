import { useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_PRODUCT_BY_CATEGORY_ID } from "../requests/products"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"

export default function Products() {

  interface iProduct {
    price: number
    thumbnail: string
    name: string
    id: number
    order_count: number
  }

  const params = useParams()
  const { data } = useQuery(GET_PRODUCT_BY_CATEGORY_ID, { variables: { category_id: params.cid }}) 
  const [dialog, showDialog] = useState<boolean>(true)

  setTimeout(()=> showDialog(false), 3000)

  return <div>
    <Header />
    <div className="most_popular p-3">
      <div className="row">

        { data?.product?.map((item:iProduct, index:number) => <Product key={index} data={item}/>) }

      </div>
    </div>
    <Footer />
  </div>
}
