import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
