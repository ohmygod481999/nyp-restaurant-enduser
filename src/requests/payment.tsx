import { gql } from '@apollo/client';

export const ON_PAY_REQUEST = gql`
    mutation ON_PAY_REQUEST ($order_id: Int!) {
        update_order_by_pk(pk_columns: {id: $order_id}, _set: { status: pending }) {
            id
            status
        }
    }
`