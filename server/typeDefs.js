import { gql } from "apollo-server-express";

//typeDefs
//graphQL:
// Query {
//     welcome
//   }
const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
  }

  type Query {
    welcome: String
    getTodos: [Todo]
    getSingleTodo(id: ID): Todo
  }

  type Mutation {
    addTodo(title: String, detail: String, date: Date): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, title: String, detail: String, date: Date): Todo
  }
`;

export default typeDefs;
