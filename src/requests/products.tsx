import { gql } from '@apollo/client';

export const GET_PRODUCT_CATEGORY = gql`
  query GET_PRODUCT_CATEGORY {
    product_category {
      id
      name
      image
    }
  }
`

export const GET_PRODUCT_BY_CATEGORY_ID = gql`
  query GET_PRODUCT_BY_CATEGORY_ID($category_id: Int!) {
    product(where: { category_id: { _eq: $category_id } }) {
      price
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