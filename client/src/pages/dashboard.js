import { useNavigate } from "react-router-dom"
import { useQuery, useMutation } from "@apollo/client"
import { USER } from "../utils/queries"
import { DELETE_GAME } from "../utils/mutations"
import Auth from "../utils/auth"

const Dashboard = () => {
    const navigate = useNavigate()
    const currentUser = Auth.loggedIn()
    const {loading, error, data} = useQuery(USER, {
        variables: {
            _id: currentUser?.data?._id
        }
    })
    const [deleteGame] = useMutation(DELETE_GAME)
    if (!currentUser) {
        navigate('/login')
    }
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const user = data?.user
    if (!user) {
        return 'No user found'
    }

    const handleDeleteGame = async (gameId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false
        }
        try {
            const {data} = await deleteGame({variables: {gameId}})
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <div>
                <h1>Welcome, {user.username}</h1>
                <p>{user.email}</p>
                <button onClick={Auth.logout}>Logout</button>
            </div>
                {user.savedGames.map((game) => {
                    return (
                    <>
                        <div key={game.gameId} border='dark'>
                            <h1>{game.name}</h1>
                            <div>Description: {game.description}</div>
                            <div>Metacritic Rating: {game.metacritic}</div>
                            <div>Release Date: {game.released}</div>
                            <div>Cover: {game.background_image}</div>
                            <div>Website: {game.website}</div>
                            <div>Rating: {game.rating}</div>
                            <div>Review: {game.metacritic_url}</div>
                            <div>ESRB: {game.esrb_rating}</div>
                            <div>Platforms: {game.platforms}</div>
                            <button onClick={() => handleDeleteGame(game.gameId)}>
                                Delete this Game!
                            </button>
                        </div>
                    </>
                    );
                })}
        </>
    )
}

export default Dashboard