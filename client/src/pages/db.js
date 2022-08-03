import { useNavigate } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { USER } from "../utils/queries"
import Auth from "../utils/auth"

const Board = () => {
    const navigate = useNavigate()
    const currentUser = Auth.loggedIn()
    const {loading, error, data} = useQuery(USER, {
        variables: {
            _id: currentUser?.data?._id
        }
    })
    if (!currentUser) {
        navigate('/login')
    }
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const user = data?.user
    if (!user) {
        return 'No user found'
    }
    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>{user.email}</p>
            <p>{user.savedGames}</p>
            <button onClick={Auth.logout}>Logout</button>
        </div>
    )
}

export default Board