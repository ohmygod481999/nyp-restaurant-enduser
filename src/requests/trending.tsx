import { gql } from "@apollo/client";

export const GET_TOP_TRENDING = gql`
    query GET_TOP_TRENDING {
        product(order_by: {
            order_count:desc
        }, limit: 10) {
            price
            id
            thumbnail
            description
            name
            order_count
            product_category {
                id
                name
            }
        }
    }
`