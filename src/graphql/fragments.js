import { gql } from "@apollo/client";

export const Repositories_Field = gql`
  fragment RepositoryFields on Repository {
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    id
  }
`;

export const UserField = gql`
  fragment UserFields on User {
    id
    username
  }
`;

export const ReviewField = gql`
  fragment ReviewFields on Review {
    id
    createdAt
    text
    rating
    user {
      id
      username
    }
  }
`;
