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
  }
`;

export const UserField = gql`
  fragment UserFields on User {
    id
    username
  }
`;
