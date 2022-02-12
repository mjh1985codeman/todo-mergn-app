import { gql } from "apollo-server-express";

//typeDefs
//graphQL:
// Query {
//     welcome
//   }
const typeDefs = gql`
  type Query {
    welcome: String
  }
`;

export default typeDefs;
