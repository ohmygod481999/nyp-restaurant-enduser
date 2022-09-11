import { gql } from "@apollo/client";

export const GET_DETAIL_CATEGORY = gql`
    query getDetailCategory($category_id: Int!) {
        product_category_by_pk(id: $category_id) {
            id
            name
            thumbnail
            products {
                id
                name
                price
                thumbnail
                product_category {
                    id
                    name
                    thumbnail
                }
                description
                order_count
            }
            __typename
        }
    }
`;
