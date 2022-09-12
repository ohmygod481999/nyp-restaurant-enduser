import { gql } from "@apollo/client";

export const GET_TOP_TRENDING = gql`
    query GET_TOP_TRENDING($company_id: Int!) {
        product(
            order_by: { order_count: desc }
            limit: 10
            where: { company_id: { _eq: $company_id } }
        ) {
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
`;
