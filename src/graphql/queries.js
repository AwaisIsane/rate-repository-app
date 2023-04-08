import { gql } from '@apollo/client';
import { Repositories_Field, UserField } from './fragments';

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
  `

export const ME = gql`
query {
  me {
    id
    ...UserFields
  }
}
${UserField}
`
