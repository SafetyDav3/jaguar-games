import { useNavigate } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { USER } from "../utils/queries"
import Auth from "../utils/auth"

import Button from '@mui/material/Button'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'


const Dashboard = () => {
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
        <>
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
                      image="./images/red-jaguar-games.png"
                    />
                  </Card> 

                  <TextField variant="outlined" label="Game Name" helperText="Search for a game" />

                  <Button
                    variant="contained" 
                    size="small" 
                    href="#" 
                    onClick={()=>alert('hello')}
                    >
                      Search
                  </Button>

                  <Typography variant="h5" style={{color: 'black'}}>
                    My Games Library
                  </Typography>

                  <Grid container spacing={5} justify="center" alignItems="stretch">
                    <Grid item xs={10} sm={5} md={5} xl={3}>
                      <Card style={{height:'100%', width:'100%', border: "0.5px solid black"}}>
                        <CardMedia 
                          component="img"
                          alt="picture of video game"
                          style={{objectFit: 'cover' }}
                          image="./images/halo.png"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Halo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Release Date: 2001
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: 4/5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet. Ab perferendis dolore aut quisquam soluta ut numquam adipisci ea voluptas alias a nesciunt eligendi aut corrupti nesciunt rem quibusdam sint. Sit consequatur velit aut Quis doloribus qui distinctio itaque At fuga provident sed dignissimos autem est autem debitis ut nemo omnis. Qui sequi dolores qui tempora voluptas aut quia dolorem ab autem deleniti non consequuntur modi. Est odit optio est voluptatum enim ut quibusdam dolores nam quae quasi id corporis magni id eaque omnis et quia harum.
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            style={{marginLeft: 45}}
                            startIcon={<RemoveCircleIcon />} 
                            variant="contained" 
                            size="small" 
                            href="#" 
                            onClick={()=>alert('hello')}
                            >Remove from Library</Button>
                        </CardActions>
                      </Card> 
                    </Grid>
                    <Grid item xs={10} sm={5} md={5} xl={3}>
                      <Card style={{height:'100%', width:'100%', border: "0.5px solid black"}}>
                        <CardMedia 
                          component="img"
                          alt="picture of video game"
                          style={{objectFit: 'cover' }}
                          image="./images/halo.png"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Halo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Release Date: 2001
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: 4/5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet. Ab perferendis dolore aut quisquam soluta ut numquam adipisci ea voluptas alias a nesciunt eligendi aut corrupti nesciunt rem quibusdam sint. Sit consequatur velit aut Quis doloribus qui distinctio itaque At fuga provident sed dignissimos autem est autem debitis ut nemo omnis. Qui sequi dolores qui tempora voluptas aut quia dolorem ab autem deleniti non consequuntur modi. Est odit optio est voluptatum enim ut quibusdam dolores nam quae quasi id corporis magni id eaque omnis et quia harum.
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            style={{marginLeft: 45}}
                            startIcon={<RemoveCircleIcon />} 
                            variant="contained" 
                            size="small" 
                            href="#" 
                            onClick={()=>alert('hello')}
                            >Remove from Library</Button>
                        </CardActions>
                      </Card> 
                    </Grid>
                    <Grid item xs={10} sm={5} md={5} xl={3}>
                      <Card style={{height:'100%', width:'100%', border: "0.5px solid black"}}>
                        <CardMedia 
                          component="img"
                          alt="picture of video game"
                          style={{objectFit: 'cover' }}
                          image="./images/halo.png"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Halo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Release Date: 2001
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: 4/5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet. Ab perferendis dolore aut quisquam soluta ut numquam adipisci ea voluptas alias a nesciunt eligendi aut corrupti nesciunt rem quibusdam sint. Sit consequatur velit aut Quis doloribus qui distinctio itaque At fuga provident sed dignissimos autem est autem debitis ut nemo omnis. Qui sequi dolores qui tempora voluptas aut quia dolorem ab autem deleniti non consequuntur modi. Est odit optio est voluptatum enim ut quibusdam dolores nam quae quasi id corporis magni id eaque omnis et quia harum.
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            style={{marginLeft: 45}}
                            startIcon={<RemoveCircleIcon />} 
                            variant="contained" 
                            size="small" 
                            href="#" 
                            onClick={()=>alert('hello')}
                            >Remove from Library</Button>
                        </CardActions>
                      </Card> 
                    </Grid>
                    <Grid item xs={10} sm={5} md={5} xl={3}>
                      <Card style={{height:'100%', width:'100%', border: "0.5px solid black"}}>
                        <CardMedia 
                          component="img"
                          alt="picture of video game"
                          style={{objectFit: 'cover' }}
                          image="./images/halo.png"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Halo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Release Date: 2001
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: 4/5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet. Ab perferendis dolore aut quisquam soluta ut numquam adipisci ea voluptas alias a nesciunt eligendi aut corrupti nesciunt rem quibusdam sint. Sit consequatur velit aut Quis doloribus qui distinctio itaque At fuga provident sed dignissimos autem est autem debitis ut nemo omnis. Qui sequi dolores qui tempora voluptas aut quia dolorem ab autem deleniti non consequuntur modi. Est odit optio est voluptatum enim ut quibusdam dolores nam quae quasi id corporis magni id eaque omnis et quia harum.
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            style={{marginLeft: 45}}
                            startIcon={<RemoveCircleIcon />} 
                            variant="contained" 
                            size="small" 
                            href="#" 
                            onClick={()=>alert('hello')}
                            >Remove from Library</Button>
                        </CardActions>
                      </Card> 
                    </Grid>
                  </Grid>
                </header>
              </div>
            </Container> 
        </>
    )
}

export default Dashboard