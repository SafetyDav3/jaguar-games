import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'

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

function App() {
  return (
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

            <TextField variant="outlined" label="Game Name" helperText="Search for a game" />

            <Typography variant="h5" style={{color: 'black'}}>
              Your Search Results
            </Typography>

            <Typography variant="h5" style={{color: 'black'}}>
              Current Top 10 Games
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
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{marginLeft: 45}}
                      startIcon={<SaveIcon />} 
                      variant="contained" 
                      size="small" 
                      href="#" 
                      onClick={()=>alert('hello')}
                      >Save to My Library</Button>
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
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{marginLeft: 45}}
                      startIcon={<SaveIcon />} 
                      variant="contained" 
                      size="small" 
                      href="#" 
                      onClick={()=>alert('hello')}
                      >Save to My Library</Button>
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
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{marginLeft: 45}}
                      startIcon={<SaveIcon />} 
                      variant="contained" 
                      size="small" 
                      href="#" 
                      onClick={()=>alert('hello')}
                      >Save to My Library</Button>
                  </CardActions>
                </Card> 
              </Grid>
              <Grid item xs={10} sm={5} md={5} xl={4}>
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
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{marginLeft: 45}}
                      startIcon={<SaveIcon />} 
                      variant="contained" 
                      size="small" 
                      href="#" 
                      onClick={()=>alert('hello')}
                      >Save to My Library</Button>
                  </CardActions>
                </Card> 
              </Grid>
            </Grid>

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
            
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
      </ThemeProvider>
  );
}

export default App;