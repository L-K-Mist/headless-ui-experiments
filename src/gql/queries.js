import gql from "graphql-tag";

export const REPORT = gql`
  query {
    field_groups {
      display_name
      unique_name
      fields {
        field_title
        field_type
        field_value
      }
    }
  }
`;
