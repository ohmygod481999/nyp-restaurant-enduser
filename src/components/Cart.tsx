import { useState } from "react";
import { cart, _orderState } from "../store";
import { useRecoilState } from "recoil";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useSubscription } from "@apollo/client";
import {
    GET_ORDER,
    ORDER_ITEMS_SUBSCRIPTION,
    REMOVE_ORDER_ITEMS,
    PRODUCT_DETAIL,
} from "./../requests/products";
import "./../styles/Modal.css";
import { ON_PAY_REQUEST } from "../requests/payment";
import { Order } from "../types";
import { formatMoney } from "../utils";

interface Props {
    setShowCart: (value: boolean) => void;
}

interface CartItem {
    price: number;
    thumbnail: string;
    name: string;
}

export default function Cart({ setShowCart }: Props) {
    let { restaurant, branch, table } = useParams();
    let nav = useNavigate();
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [_cart_, setCart] = useRecoilState<any>(cart);

    const [removeOrderItems, removeOrderItemsResponse] =
        useMutation(REMOVE_ORDER_ITEMS);

    const [orderState, setOrderState] = useRecoilState<Order | null>(
        _orderState
    );

    const [waiting, setWaiting] = useState<boolean>(false);

    let { data, error, loading } = useSubscription(ORDER_ITEMS_SUBSCRIPTION, {
        variables: {
            order_id: orderState?.id,
        },
    });

    let [onPayRequest, _onPayRequest_] = useMutation(ON_PAY_REQUEST);

    const paymentRequest = () => {
        setWaiting(true);

        onPayRequest({
            variables: { order_id: orderState?.id },
            onCompleted(data) {
                console.log(data);
            },
        });

        /** @onPay Complete below **/

        // removeOrderItems({
        //     variables: {
        //         order_id: orderTarget
        //     }, onCompleted(data) {
        //     }
        // })
    };

    const waitingModalStyles: any = {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        zIndex: 999,
    };

    const buttonStyle = {
        border: "none",
        background: "transparent",
        fontsize: 10,
    };

    return (
        <div>
            <div className="cart osahan-checkout">
                {waiting && (
                    <div style={waitingModalStyles}>
                        <img src="/img/loading.svg" alt="" />
                        <div>
                            <h4 className="text-white">
                                Xin vui lòng đợi nhân viên xác nhận thanh toán
                            </h4>
                        </div>
                    </div>
                )}

                <div className="bg-primary border-bottom px-3 pt-3 pb-3 d-flex align-items-center">
                    <a className="toggle" href="#">
                        <span />
                    </a>
                    <h4 className="font-weight-bold m-0 text-white">
                        Giỏ hàng
                    </h4>
                    <button
                        onClick={() => setShowCart(false)}
                        className="text-white font-weight-bold ml-auto"
                        style={buttonStyle}
                    >
                        {" "}
                        Đóng
                    </button>
                </div>
                {/**/}
                {loading && <h2>Loading ...</h2>}
                {data && data.order_items.length === 0 && (
                    <div className="mt-3">Giỏ hàng trống</div>
                )}
                {data &&
                    data.order_items?.map((item: any, index: number) => (
                        <Cart.Item key={index} data={item} />
                    ))}
                {/* <div className="mb-3 shadow bg-white rounded p-3 py-3 mt-3 clearfix">
                    <div className="input-group-sm mb-2 input-group">
                        <input
                            placeholder="Enter promo code"
                            type="text"
                            className="form-control"
                        />
                        <div className="input-group-append">
                            <button
                                id="button-addon2"
                                type="button"
                                className=" btn-primary"
                            >
                                <i className="feather-percent" /> APPLY
                            </button>
                        </div>
                    </div>
                    <div className="mb-0 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="feather-message-square" />
                            </span>
                        </div>
                        <textarea
                            placeholder="Any suggestions? We will pass it on..."
                            aria-label="With textarea"
                            className="form-control"
                            defaultValue={""}
                        />
                    </div>
                </div> */}

                <button
                    onClick={paymentRequest}
                    className="btn btn-success btn-block btn-lg fixed-bottom"
                >
                    Yêu cầu thanh toán
                    <i className="icofont-long-arrow-right" />
                </button>
            </div>
        </div>
    );
}

Cart.Item = function CartItem({ data }: any) {
    const productDetail = useQuery(PRODUCT_DETAIL, {
        variables: {
            id: data.product_id,
        },
    });

    return (
        <div className="bg-white rounded shadow mb-3 py-2">
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                <div className="media align-items-center">
                    <div className="mr-2 text-danger">·</div>
                    <div className="media-body">
                        <p className="m-0">
                            {productDetail?.data?.product_by_pk.name}
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="count-number float-right">
                        <input
                            className="count-number-input"
                            type="text"
                            readOnly
                            defaultValue={" 1 "}
                        />
                    </span>
                    <p className="text-gray mb-0 float-right ml-2 text-muted small">
                        {productDetail?.data?.product_by_pk.price &&
                            formatMoney(
                                productDetail?.data?.product_by_pk.price
                            )}
                    </p>
                </div>
            </div>
        </div>
    );
};
