import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query Users($offset: Int!, $limit: Int!) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
      count
    }
  }
`;
