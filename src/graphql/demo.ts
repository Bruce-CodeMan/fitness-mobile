/*
 * @Date: 2023-04-04 11:12:51
 * @Author: Bruce
 * @Description: 
 */
import { gql } from '@apollo/client';

export const FIND = gql `
query find($id: String!){
    find(id:$id){
      name
    }
  }
`;

export const UPDATE = gql`
mutation update($id: String!, $params: UserInput!){
    update(id:$id, params:$params)
  }
`;