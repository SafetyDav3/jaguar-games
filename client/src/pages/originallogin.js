import { useState } from "react"
import { LOGIN } from "../utils/mutations"
import { useMutation } from "@apollo/client"
import Auth from "../utils/auth"

const Login = () => {   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [login] = useMutation(LOGIN)

    const handleSubmit = async e => {
        e.preventDefault()
        const {data} = await login({
            variables: {
                username,
                password
            }
        })
        Auth.login(data.login.token)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input 
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                required
            />
            <input 
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                required
            />
            <button type="submit">Log In</button>
        </form>
    )
}

export default Login