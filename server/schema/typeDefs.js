const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Game {
        gameId: Int!
        name: String
        description: String
        metacritic: Int
        released: String
        background_image: String
        website: String
        rating: Int
        metacritic_url: String
        esrb_rating: String
        platforms: [String]
    }

    type User {
        _id: ID
        username: String
        email: String
        savedGames: [Game]
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
        saveGame(
            gameId: Int!
            name: String
            description: String
            metacritic: Int
            released: String
            background_image: String
            website: String
            rating: Int
            metacritic_url: String
            esrb_rating: String
            platforms: [String]
        ): User
        deleteGame(gameId: Int!): User
    }
`

module.exports = typeDefs