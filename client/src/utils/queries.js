import { gql } from "@apollo/client";

export const ALL_USERS = gql`
    query ALL_USERS {
        users {
        _id
        username
        email
        }
    }
    `

export const USER = gql`
query User($username: String) {
    user(username: $username) {
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