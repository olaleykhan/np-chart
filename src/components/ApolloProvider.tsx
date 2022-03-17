import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'https://fakerql.nplan.io/graphql',
	cache,
});

const Apollo: React.FC = ({ children }) => <ApolloProvider client={client}> {children} </ApolloProvider>;

export default Apollo;
