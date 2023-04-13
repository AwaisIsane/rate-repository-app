import { gql } from "@apollo/client";
import { ReviewField } from "./fragments";

export const AUTHORIZE = gql`
  mutation authorize($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        ownerName
        name
      }
      ...ReviewFields
    }
  }
  ${ReviewField}
`;

export const ADD_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
