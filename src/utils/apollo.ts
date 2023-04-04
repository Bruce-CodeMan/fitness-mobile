/*
 * @Date: 2023-04-04 10:23:32
 * @Author: Bruce
 * @Description: 
 */
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:8888/graphql',
    cache: new InMemoryCache(),
})