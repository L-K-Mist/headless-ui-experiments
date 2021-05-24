import gql from "graphql-tag";

export const SCHOOL_BY_ID = gql`
  query schools($id: String!) {
    rsa_schools_by_pk(nat_emis: $id) {
      name
      phase
      nat_emis
      Learners_2019
      Educator_2019
      NoFeeSchool
      Status
      Telephone
      province
      DistrictMunicipalityName
      Suburb
      StreetAddress
      PostalAddress
      lat
      lng
    }
  }
`;

export const ALL_SCHOOLS = gql`
  {
    rsa_schools {
      name
      lat
      lng
      nat_emis
    }
  }
`;

export const SCHOOLS_FILTER = gql`
  query schools_filter($searchLogic: rsa_schools_bool_exp!) {
    rsa_schools(where: $searchLogic) {
      name
      lat
      lng
      nat_emis
    }
  }
`;

export const SCHOOLS_NEARBY = gql`
  query nearbySchools($nearbyRange: rsa_schools_bool_exp!) {
    rsa_schools(where: $nearbyRange) {
      name
      lat
      lng
      nat_emis
    }
  }
`;

export const LAT_LNG_FILTER = gql`
  query sa_schools_aggregate($lat: Float!, $lng: Float!) {
    sa_schools_aggregate(
      where: { _and: [{ lat: { _gt: $lat } }, { lng: { _lt: $lng } }] }
    ) {
      aggregate {
        count
      }
    }
  }