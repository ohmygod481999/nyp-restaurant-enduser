import { useState } from "react"
import { useParams } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useMutation, useQuery } from '@apollo/client'
import { ADD_ORDER_ITEM, GET_ORDER } from "../requests/products"

interface iProduct {
    data:{
        price: number
        thumbnail: string
        name: string
        id: number
    }
  }
/// Single Product
export default function Product({data}:iProduct) {

    let { restaurant, branch, table } = useParams()

    const [addOrderItem, addOrderItemResponse] = useMutation(ADD_ORDER_ITEM)
    const order = useQuery(GET_ORDER, { variables: { store_id: restaurant, table_id: table } });
    let orderTarget = order?.data?.order[0]?.id
    

    const handleAdd = () => {

        addOrderItem({
            variables: {
                quantity: 1, note: "None", order_id: orderTarget, product_id: data.id
            }, onError: () => {
              console.log(`Error: Existed Order`)
            }
          })
    }

    // Khi thêm vào giỏ hàng đồng nghĩa với việc tạo 1 order list

    const iconStyle:any = {
        fontSize:26, 
        borderRadius: "50%",
        textAlign: "center",
        backgroundColor: "white",
        padding: 4,
        cursor: "pointer"
    }


    return <div className="col-6 pl-2">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
            <div className="list-card-image">
                <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span></div>
                <button className="favourite-heart text-danger position-absolute"><AiOutlineShoppingCart onClick={handleAdd} style={iconStyle}/></button>
                <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                <a>
                    <img style={{maxHeight:"400px"}} src={data.thumbnail} className="img-fluid item-img w-100" />
                </a>
            </div>
            <div className="p-3 position-relative">
                <div className="list-card-body">
                    <h6 className="mb-1"><a href="restaurant.html" className="text-black">{data.name}</a></h6>
                    <p className="text-gray mb-3">North Indian • Indian • Pure veg</p>
                    <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 30–35 min</span> <span className="float-right text-black-50"> $250 FOR TWO</span></p>
                </div>
                <div className="list-card-badge">
                    <span className="badge badge-success">OFFER</span> <small>65% off</small>
                </div>
            </div>
        </div>
    </div>
}