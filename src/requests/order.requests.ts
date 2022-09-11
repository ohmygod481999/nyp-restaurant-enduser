import { gql } from "@apollo/client";

export const GET_ORDER_FROM_TABLE = gql`
    query getOrderFromTable($store_id: Int!, $table_id: Int!) {
        order(
            where: {
                _and: [
                    { store_id: { _eq: $store_id } }
                    { table_id: { _eq: $table_id } }
                ]
                _or: [
                    { status: { _eq: "created" } }
                    { status: { _eq: "pending" } }
                ]
            }
        ) {
            id
            status
            company_id
            store_id
            table_id
            order_items {
                id
                product {
                    id
                    name
                    price
                    thumbnail
                }
                quantity
            }
        }
    }
`;

export const GET_ORDER_FROM_TABLE_SUBCRIPTION = gql`
    subscription getOrderFromTableSubcription(
        $store_id: Int!
        $table_id: Int!
    ) {
        order(
            where: {
                _and: [
                    { store_id: { _eq: $store_id } }
                    { table_id: { _eq: $table_id } }
                ]
                _or: [
                    { status: { _eq: "created" } }
                    { status: { _eq: "pending" } }
                ]
            }
        ) {
            id
            status
            company_id
            store_id
            table_id
            order_items {
                id
                product {
                    id
                    name
                    price
                    thumbnail
                }
                quantity
            }
        }
    }
`;

export const CREATE_ORDER = gql`
    mutation createOrder($company_id: Int!, $store_id: Int!, $table_id: Int!) {
        create_order(
            company_id: $company_id
            store_id: $store_id
            table_id: $table_id
        ) {
            id
            status
            company_id
            store_id
            table_id
            created_at
        }
    }
`;
