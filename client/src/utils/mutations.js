import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`
export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
  
`
export const UPDATE_USER = gql`
mutation UpdateUser($_id: ID, $email: String, $password: String, $username: String) {
    updateUser(_id: $_id, email: $email, password: $password, username: $username) {
      _id
      username
      email
    }
  }
`
export const DELETE_USER = gql`
mutation DeleteUser($_id: ID) {
    deleteUser(_id: $_id) {
      _id
      username
      email
    }
  }
`

export const SAVE_GAME = gql`
mutation SaveGame($gameId: Int!, $name: String, $description: String, $metacritic: Int, $released: String, $backgroundImage: String, $website: String, $rating: Int, $metacriticUrl: String, $esrbRating: String, $platforms: [String]) {
    saveGame(gameId: $gameId, name: $name, description: $description, metacritic: $metacritic, released: $released, background_image: $backgroundImage, website: $website, rating: $rating, metacritic_url: $metacriticUrl, esrb_rating: $esrbRating, platforms: $platforms) {
      _id
      username
      email
      savedGames {
        gameId
        name
        description
        metacritic
        released
        background_image
        website
        rating
        metacritic_url
        esrb_rating
        platforms
      }
    }
  }
`

export const DELETE_GAME = gql`
    mutation DeleteGame($gameId: Int!) {
        deleteGame(gameId: $gameId) {
            _id
            username
            email
            savedGames {
                gameId
                name
                description
                metacritic
                released
                background_image
                website
                rating
                metacritic_url
                esrb_rating
                platforms
            }
        }
    }
    `

