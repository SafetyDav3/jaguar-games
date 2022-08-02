import { useNavigate } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { USER } from "../utils/queries"
import Auth from "../utils/auth"

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey, red } from '@mui/material/colors'



const Dashboard = () => {
    const navigate = useNavigate()
    const currentUser = Auth.loggedIn()
    const {loading, error, data} = useQuery(USER, {
        variables: {
            _id: currentUser?.data?._id
        }
    })

    const theme = createTheme({
        palette: {
          primary: {
            main: grey[500],
          },
          secondary: {
            main: red[700],
          },
        },
      });

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
        <>
          <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
              <div className="App">
                <header className="App-header">
                  <AppBar color="secondary">
                    <Toolbar>
                      <IconButton>
                        <MenuIcon />
                      </IconButton>
                      <Typography variant="h6">
                        Jaguar Games
                      </Typography>
                      <Button>
                        Login
                      </Button>
                    </Toolbar>
                  </AppBar>

                  <Card style={{margin: 20}}>
                    <CardMedia 
                      component="img"
                      alt="picture of jaguar games logo"
                      height="200"
                      image="./images/red-jaguar-games-logo.png"
                    />
                  </Card> 

                  <TextField variant="outlined" type="email" label="Email" helperText="Please enter your email" />
                  <TextField variant="outlined" type="email" label="Confirm Email" helperText="Please re-enter your email" />
                  <TextField variant="outlined" label="Password" helperText="Please enter your password" />
                  <TextField variant="outlined" label="Confirm Password" helperText="Please re-enter your Password" />

                  <Button
                    variant="contained" 
                    size="small" 
                    href="#" 
                    onClick={()=>alert('hello')}
                    >
                      Submit
                  </Button>

                </header>
              </div>
            </Container>
          </ThemeProvider>  
        </>
    )
}

export default Dashboard