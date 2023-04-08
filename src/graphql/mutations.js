import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation authorize($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
