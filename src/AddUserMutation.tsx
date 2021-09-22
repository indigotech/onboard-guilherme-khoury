import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($data: UserInputType!) {
    createUser(data: $data) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
