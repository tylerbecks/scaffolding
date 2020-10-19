import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://devoted-salmon-28.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});
