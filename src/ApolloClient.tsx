import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://example.com/graphql',
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
});

export default client;