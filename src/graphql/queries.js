import { gql } from "@apollo/client";
import { Repositories_Field, ReviewField, UserField } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${Repositories_Field}
`;

export const ME = gql`
  query ($includeReviews: Boolean = false) {
    me {
      id
      ...UserFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repositoryId
          }
        }
      }
    }
  }
  ${UserField}
  ${ReviewField}
`;

export const GET_REPOSITORY = gql`
  query Repository ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryFields
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewFields
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${Repositories_Field}
  ${ReviewField}
`;
