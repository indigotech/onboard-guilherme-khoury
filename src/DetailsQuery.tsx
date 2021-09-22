import { gql } from '@apollo/client';

export const DETAIL_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
