import { useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useMutation, useQuery } from "@apollo/client";
import "./../styles/NoteModal.css";
import {
    ADD_ORDER_ITEM,
    GET_ORDER,
    INCREASE_ORDER_COUNT,
} from "../requests/products";
import Dialog from "../components/Dialog";
import { useRecoilState } from "recoil";
import { Order } from "../types";
import { _orderState } from "../store";
import { formatMoney } from "../utils";

interface iProduct {
    data: {
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
    };
}
/// Single Product
export default function Product({ data }: iProduct) {
    let { restaurant, branch, table } = useParams();
    const [noteModal, setNoteModal] = useState<boolean>(false);
    const [noteValue, setNoteValue] = useState<string>("");
    const [dialog, showDialog] = useState<boolean>(false);
    const [addOrderItem, addOrderItemResponse] = useMutation(ADD_ORDER_ITEM);
    const [increaseOderCount, increaseOderCountResponse] =
        useMutation(INCREASE_ORDER_COUNT);

    const [orderState, _] = useRecoilState<Order | null>(_orderState);

    /** Khi nhấn vào Add to cart, những thứ sẽ xảy ra:
     * @step1 Show modal cho phép người dùng điền ghi chú cho món
     * @step2 Nâng giá trị order count nên 1
     * @step3 Thêm món ăn vào danh sách order
     */

    const handleAdd = () => {
        setNoteModal(true);
    };

    const showingDialog = () => {
        showDialog(true);
        setTimeout(() => showDialog(false), 1000);
    };

    const submitOrder = () => {
        if (orderState) {
            increaseOderCount({
                variables: {
                    product_id: data.id,
                },
            });

            addOrderItem({
                variables: {
                    quantity: 1,
                    note: noteValue,
                    order_id: orderState.id,
                    product_id: data.id,
                },
                onError: () => {
                    console.log(`Error: Existed Order`);
                },
            });

            setNoteModal(false);
            showingDialog();
        }
    };

    // Khi thêm vào giỏ hàng đồng nghĩa với việc tạo 1 order list

    const iconStyle: any = {
        fontSize: 20,
        color: "white",
        fontWeight: "normal",
    };

    return (
        <div
            className="col-6 "
            style={{
                paddingBottom: "20px",
            }}
        >
            {dialog && <Dialog data={data.name} />}
            {noteModal && (
                <div className="noteModal_overlay">
                    <div className="noteModal">
                        <div className="noteModal_header">
                            <h5>
                                Thêm ghi chú
                                <h6 className="noteModal_foodName">
                                    {data.name}
                                </h6>
                            </h5>

                            <button onClick={() => setNoteModal(false)}>
                                Close
                            </button>
                        </div>

                        <textarea
                            className="noteModal_textzone"
                            onChange={(e: any) => setNoteValue(e.target.value)}
                            rows={8}
                        ></textarea>

                        <button
                            onClick={submitOrder}
                            className="noteModal_order_btn"
                        >
                            Hoàn tất
                        </button>
                    </div>
                </div>
            )}

            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                <div className="list-card-image">
                    <div className="star position-absolute">
                        <span className="badge badge-success">
                            {/* <i className="feather-star" /> 3.1 (300+) */}
                            <span style={{
                                fontSize: 15
                            }}>{formatMoney(data.price)}</span>
                        </span>
                    </div>
                    <button
                        className="favourite-heart position-absolute iconsCartHover"
                        style={{
                            border: "none",
                            background: "transparent",
                            borderRadius: "50%",
                            textAlign: "center",
                            backgroundColor: "#e23744",
                            padding: 6,
                            cursor: "pointer",
                        }}
                    >
                        <AiOutlineShoppingCart
                            onClick={handleAdd}
                            style={iconStyle}
                        />
                    </button>
                    <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                    </div>
                    <a>
                        <img
                            style={{ maxHeight: "400px" }}
                            src={data.thumbnail || "https://www.happyeater.com/images/default-food-image.jpg"}
                            className="img-fluid item-img w-100"
                        />
                    </a>
                </div>
                <div className="p-3 position-relative">
                    <div className="list-card-body">
                        <h6 className="mb-1">
                            <a className="text-black">
                                {data.name}
                            </a>
                        </h6>
                        <p className="text-gray mb-3">
                            {/* North Indian • Indian • Pure veg */}
                            {data.product_category.name}
                        </p>
                        <p className="text-gray mb-3">
                            {/* North Indian • Indian • Pure veg */}
                            {data.description}
                        </p>
                        {/* <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                <i className="feather-clock" /> 30–35 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                                {" "}
                                $250 FOR TWO
                            </span>
                        </p> */}
                    </div>
                    {/* <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>{" "}
                        <small>65% off</small>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
