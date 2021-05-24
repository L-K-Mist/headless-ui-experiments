import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  // headers["x-hasura-admin-secret"] = process.env.VUE_APP_HASURA_ADMIN;
  return headers;
};

const apollo = new ApolloClient({
  link: createHttpLink({
    uri: process.env.VUE_APP_FORMBUILDER_ENDPOINT,
    fetch,
    headers: getHeaders(),
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default apollo;
