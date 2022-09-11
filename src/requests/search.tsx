import { gql } from "@apollo/client";

export const SEARCH_PRODUCT = gql`
    query SEARCH_PRODUCT ($keyword: String!) {
        product(where: {name: {_ilike: $keyword }}) {
            id
            name
            thumbnail
            price
            description
            product_category {
                id
                name
            }
          }
    }
`