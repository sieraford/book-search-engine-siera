const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    getSingleUser(username: String, id: ID): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      userId: ID!
      description: String!
      bookId: String!
      title: String!
    ): User
    deleteBook(userId: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;