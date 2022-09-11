import { gql } from "@apollo/client";

export const GET_PRODUCT_CATEGORY = gql`
    query GET_PRODUCT_CATEGORIES($company_id: Int!) {
        product_category(where: { company_id: { _eq: $company_id } }) {
            id
            name
            thumbnail
            __typename
        }
    }
`;

export const GET_ALL_PRODUCT = gql`
    query GET_PRODUCT_BY_CATEGORY_ID($category_id: Int!) {
        product {
            price
            id
            thumbnail
            name
            order_count
        }
    }
`;
export const GET_PRODUCT_BY_CATEGORY_ID = gql`
    query GET_PRODUCT_BY_CATEGORY_ID($category_id: Int!) {
        product(where: { category_id: { _eq: $category_id } }) {
            price
            id
            thumbnail
            name
            order_count
        }
    }
`;
export const GET_PRODUCT = gql`
    query GET_PRODUCTS($company_id: Int!) {
        product(where: { company_id: { _eq: $company_id } }) {
            id
            name
            description
            price
            thumbnail
            order_count
            product_category {
              id
              name
            }
            __typename
        }
    }
`;

export const GET_ORDER = gql`
    query GET_ORDER($store_id: Int!, $table_id: Int!) {
        order(
            where: {
                store_id: { _eq: $store_id }
                table_id: { _eq: $table_id }
            }
        ) {
            id
        }
    }
`;

export const INCREASE_ORDER_COUNT = gql`
    mutation A($product_id: Int!) {
        update_product_by_pk(
            pk_columns: { id: $product_id }
            _inc: { order_count: 1 }
        ) {
            id
        }
    }
`;

export const ADD_ORDER_ITEM = gql`
    mutation addOderItem(
        $quantity: Int!
        $note: String!
        $order_id: Int!
        $product_id: Int!
    ) {
        insert_order_items_one(
            object: {
                quantity: $quantity
                note: $note
                order_id: $order_id
                product_id: $product_id
            }
        ) {
            id
        }
    }
`;
export const ORDER_ITEMS_SUBSCRIPTION = gql`
    subscription onOrderItemsAdd($order_id: Int!) {
        order_items(where: { order_id: { _eq: $order_id } }) {
            id
            quantity
            note
            product_id
        }
    }
`;

export const PRODUCT_DETAIL = gql`
    query PRODUCT_DETAIL($id: Int!) {
        product_by_pk(id: $id) {
            id
            name
            price
        }
    }
`;

export const REMOVE_ORDER_ITEMS = gql`
    mutation REMOVE_ORDER_ITEMS($order_id: Int!) {
        delete_order_items(where: { order_id: { _eq: $order_id } }) {
            affected_rows
        }
    }
`;
