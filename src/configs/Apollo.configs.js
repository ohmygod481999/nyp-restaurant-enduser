import { split } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
    uri: `wss://longvb.ddns.net:8083/v1/graphql`,
    options: {
        reconnect: true
    }
})

const httpLink = new HttpLink({
    uri: "https://longvb.ddns.net:8083/v1/graphql"
})

const link = split(({query}) => {
    const definition = getMainDefinition(query)
    return (
        definition.kind === "OperationDefinition" && definition.operation === "subscription"
    )
}, wsLink, httpLink)

export default new ApolloClient({
    cache: new InMemoryCache(),
    link,
    wsLink
})