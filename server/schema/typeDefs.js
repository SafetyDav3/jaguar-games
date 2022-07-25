const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        users: [User]
        user(_id: ID, username: String, email: String): User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(_id: ID, email: String, password: String, username: String): User
        deleteUser(_id: ID): User
    }
`

module.exports = typeDefs