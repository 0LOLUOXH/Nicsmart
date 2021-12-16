import { ApolloClient, HttpLink,InMemoryCache } from "@apollo/client";
import { useMemo } from "react";



let URI;
let apolloClient;

if(process.env.GRAPHQL_URI) {
    URI = process.env.GRAPHQL_URI;
}

function createApolloClient(uri) {

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            credentials: 'same-origin',
            uri,
        }),
        cache: new InMemoryCache()
    });
}

export function initializeApollo(initialState = null, uri) {
    const _apolloClinet = apolloClient ?? createApolloClient(uri);
    if(initialState) {
        const existingCache = _apolloClinet.extract();
        _apolloClinet.cache.restore({...existingCache, ...initialState});
    }

    if(typeof window === 'undefined') return _apolloClinet;

    if(!apolloClient) apolloClient = _apolloClinet;

    return _apolloClinet;
}

const useApollo = (initialState, uri) => {
    const store = useMemo(() => initializeApollo(initialState, uri), [initialState]);
    return store;
};

export { useApollo }