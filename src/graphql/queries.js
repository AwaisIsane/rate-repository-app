import { gql } from "@apollo/client";
import { Repositories_Field, ReviewField, UserField } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${Repositories_Field}
`;

export const ME = gql`
  query {
    me {
      id
      ...UserFields
    }
  }
  ${UserField}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
      url
      reviews {
        edges {
          node {
           ...ReviewFields
          }
        }
      }
    }
  }
  ${Repositories_Field}
  ${ReviewField}
`;
