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
    query USER ($_id: ID, $username: String, $email: String) {
        user(username: $username, _id: $_id, email: $email) {
            _id
            username
            email
        }
    }
    `