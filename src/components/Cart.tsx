import { useState } from "react"
import { cart } from "../store"
import { useRecoilState } from "recoil"

import { useParams, useNavigate } from "react-router-dom"
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { GET_ORDER, ORDER_ITEMS_SUBSCRIPTION, REMOVE_ORDER_ITEMS, PRODUCT_DETAIL } from "./../requests/products"
import "./../styles/Modal.css"

interface Props {
    setShowCart: (value: boolean) => void
}

interface CartItem {
    price: number
    thumbnail: string
    name: string
}


export default function Cart({ setShowCart }: Props) {

    let { restaurant, branch, table } = useParams()
    let nav = useNavigate()
    const [fullScreen, setFullScreen] = useState<boolean>(false)
    const [_cart_, setCart] = useRecoilState<any>(cart)

    const order = useQuery(GET_ORDER, { variables: { store_id: restaurant, table_id: table } });
    const[removeOrderItems, removeOrderItemsResponse] = useMutation(REMOVE_ORDER_ITEMS)
    let orderTarget = order?.data?.order[0]?.id

    let { data, error, loading } = useSubscription(ORDER_ITEMS_SUBSCRIPTION, {
        variables: {
            order_id: orderTarget
        }
    })

    const paymentRequest = () => {
        // 
        removeOrderItems({
            variables: {
                order_id: orderTarget
            }, onCompleted(data) {
                nav(`/`)
            },
        })
    }

    return <div className="cart osahan-checkout">
        <div className="bg-primary border-bottom px-3 pt-3 pb-5 d-flex align-items-center">
            <a className="toggle" href="#"><span /></a>
            <h4 className="font-weight-bold m-0 text-white pl-5">Order</h4>
            <button onClick={() => setShowCart(false)} className="text-white font-weight-bold ml-auto"> Close</button>
        </div>
        {/* checkout */}
        <div className="p-3 osahan-cart-item">
            <div className="d-flex mb-3 osahan-cart-item-profile bg-white shadow rounded p-3 mt-n5">
                <img alt="osahan" src="https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg" className="store-image mr-3 rounded-circle" />
                <div className="d-flex flex-column">
                    <h6 className="mb-1 font-weight-bold">Spice Hut Indian Restaurant</h6>
                    <p className="mb-0 small text-muted"><i className="feather-map-pin" /> 2036 2ND AVE, NEW YORK, NY 10029</p>
                </div>
            </div>
            {/**/}
            { loading && <h2>Loading ...</h2>}
            { data && data.order_items?.map((item:any, index:number) => <Cart.Item key={index} data={item}/>) }
            <div className="mb-3 shadow bg-white rounded p-3 py-3 mt-3 clearfix">
                <div className="input-group-sm mb-2 input-group">
                    <input placeholder="Enter promo code" type="text" className="form-control" />
                    <div className="input-group-append"><button id="button-addon2" type="button" className="btn btn-primary"><i className="feather-percent" /> APPLY</button></div>
                </div>
                <div className="mb-0 input-group">
                    <div className="input-group-prepend"><span className="input-group-text"><i className="feather-message-square" /></span></div>
                    <textarea placeholder="Any suggestions? We will pass it on..." aria-label="With textarea" className="form-control" defaultValue={""} />
                </div>
            </div>
            <div className="shadow bg-white rounded p-3 clearfix">
                
            </div>
            <button onClick={paymentRequest} className="btn btn-success btn-block btn-lg fixed-bottom">Yêu cầu thanh toán<i className="icofont-long-arrow-right" /></button>
        </div>
    </div>
}


Cart.Item = function CartItem({ data }:any) {

    const productDetail = useQuery(PRODUCT_DETAIL, { variables: {
        id: data.product_id
    } })

    console.log(productDetail?.data?.product_by_pk.name)

    return <div className="bg-white rounded shadow mb-3 py-2">
        <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
            <div className="media align-items-center">
                <div className="mr-2 text-danger">·</div>
                <div className="media-body">
                    <p className="m-0">{productDetail?.data?.product_by_pk.name}</p>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <span className="count-number float-right"><input className="count-number-input" type="text" readOnly defaultValue={" 1 "} /></span>
                <p className="text-gray mb-0 float-right ml-2 text-muted small">VND {productDetail?.data?.product_by_pk.price}</p>
            </div>
        </div>
    </div>
}