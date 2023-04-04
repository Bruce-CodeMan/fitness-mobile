/*
 * @Date: 2023-04-04 14:03:58
 * @Author: Bruce
 * @Description: 
 */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from '@faker-js/faker/locale/zh_CN';

const typeDefs = `#graphql
  type UserType {
    id: String!
    name: String!
    desc: String!

    """账户信息"""
    account: String!
  }

  type Query {
    """通过 ID 查询用户"""
    find(id: String!): UserType!
  }

  type Mutation {
    create(params: UserInput!): Boolean!

    """通过 ID 更新用户"""
    update(id: String!, params: UserInput!): Boolean!

    """通过 ID 删除用户"""
    del(id: String!): Boolean!
  }

  input UserInput {
    name: String!
    desc: String!
  }
`;

const resolvers = {
  UserType: {
    name: () => faker.name.lastName() + faker.name.firstName(),
  },
};


const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () =>  'hello',
};


const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

startStandaloneServer(server, { listen: { port: 8888 } });
