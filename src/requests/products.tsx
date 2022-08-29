import { gql } from '@apollo/client';

export const GET_PRODUCT_CATEGORY = gql`
  query GET_PRODUCT_CATEGORY {
    product_category {
      id
      name
    }
  }
`

export const GET_ALL_PRODUCT = gql`
  query GET_PRODUCT_BY_CATEGORY_ID($category_id: Int!) {
    product {
      price
      id
      thumbnail
      name
  }
}
`
export const GET_PRODUCT_BY_CATEGORY_ID = gql`
  query GET_PRODUCT_BY_CATEGORY_ID($category_id: Int!) {
    product(where: { category_id: { _eq: $category_id } }) {
      price
      id
      thumbnail
      name
    }
  }
`
export const GET_PRODUCT = gql`
  query GET_PRODUCT {
    product {
      id
      name
      price
      thumbnail
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOder ($store_id: Int!, $table_id: Int!){
    insert_order_one(object: { store_id:$store_id, table_id:$table_id, company_id: 1 }) {
      id
    }
  }
`
export const GET_ORDER = gql`
  query GET_ORDER ($store_id: Int!, $table_id: Int!) {
    order(where: { store_id: { _eq: $store_id }, table_id: { _eq: $table_id } }) {
      id
    }
  }
`

export const ADD_ORDER_ITEM = gql`
  mutation addOderItem ($quantity: Int!, $note: String!, $order_id: Int!, $product_id: Int!){
    insert_order_items_one(object: { quantity: $quantity, note: $note, order_id: $order_id, product_id: $product_id }){
     id
   }
}
`
export const ORDER_ITEMS_SUBSCRIPTION = gql`
  subscription onOrderItemsAdd ($order_id: Int!){
    order_items(where:{ order_id: { _eq: $order_id } }) {
      id
      quantity
      note
      product_id
    }
  }
`

export const PRODUCT_DETAIL = gql`
  query PRODUCT_DETAIL ($id: Int!){
    product_by_pk(id: $id) {
      id
      name
      price
    }
  }
`

export const REMOVE_ORDER_ITEMS = gql`
  mutation REMOVE_ORDER_ITEMS ($order_id: Int!){

    delete_order_items(where:{ order_id: {_eq: $order_id}}) {
      affected_rows
    }

  }
`