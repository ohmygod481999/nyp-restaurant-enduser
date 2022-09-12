import { split } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_HASURA_WS_URL,
    options: {
        reconnect: true,
    },
});

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_HASURA_URL,
});

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    wsLink,
});
