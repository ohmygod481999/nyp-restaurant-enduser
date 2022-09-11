import { useMutation, useQuery, useSubscription } from "@apollo/client";
import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { apolloClient } from "../configs/Apollo.configs";
import {
    CREATE_ORDER,
    GET_ORDER_FROM_TABLE,
    GET_ORDER_FROM_TABLE_SUBCRIPTION,
} from "../requests/order.requests";
import { _orderState } from "../store";
import { Order, OrderStatus } from "../types";

function InitOrderTable() {
    let { company_id, branch_id, table_id } = useParams();
    const [orderState, setOrderState] = useRecoilState<Order | null>(
        _orderState
    );
    let { data, error, loading } = useSubscription(
        GET_ORDER_FROM_TABLE_SUBCRIPTION,
        {
            variables: {
                store_id: branch_id,
                table_id: table_id,
            },
        }
    );

    useEffect(() => {
        if (data) {
            // console.log("run")
            const order: Order[] = data.order;
            if (order.length > 0) {
                setOrderState(order[0]);
            } else {
                apolloClient
                    .mutate({
                        mutation: CREATE_ORDER,
                        variables: {
                            company_id: company_id,
                            store_id: branch_id,
                            table_id: table_id,
                        },
                    })
                    .then(({ data }) => {
                        const order: Order = data.insert_order_one;
                        setOrderState(order);
                    });
            }
        }
    }, [data, branch_id, table_id]);

    // useEffect(() => {
    //     console.log(branch, table);
    //     apolloClient
    //         .query({
    //             query: GET_ORDER_FROM_TABLE,
    //             variables: {
    //                 store_id: branch,
    //                 table_id: table,
    //             },
    //         })
    //         .then(({ data }) => {
    //             const order: Order[] = data.order;

    //             if (order.length > 0) {
    //                 setOrderState(order[0]);
    //             } else {
    //                 apolloClient
    //                     .mutate({
    //                         mutation: CREATE_ORDER,
    //                         variables: {
    //                             store_id: branch,
    //                             table_id: table,
    //                         },
    //                     })
    //                     .then(({ data }) => {
    //                         const order: Order = data.insert_order_one;
    //                         setOrderState(order);
    //                     });
    //             }
    //         });
    // }, []);

    useEffect(() => {
        console.log(orderState);
    }, [orderState]);

    return (
        <>
            <Outlet />
        </>
    );
}

export default InitOrderTable;
