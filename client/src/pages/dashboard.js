import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { USER } from "../utils/queries";
import { DELETE_GAME } from "../utils/mutations";
import Auth from "../utils/auth";

import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

// API calls
import { topTen, searchGame, getGame } from "../utils/api";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("battlefield");
  const [gameId , setGameId] = useState("3498");

  const navigate = useNavigate();
  const currentUser = Auth.loggedIn();
  const { loading, error, data } = useQuery(USER, {
    variables: {
      _id: currentUser?.data?._id,
    },
  });

  if (!currentUser) {
    navigate("/login");
  }
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  // ↓↓↓ API Calls ↓↓↓
  // Return top ten games from RAWG API
  const getTopTen = async () => {
    try {
      const response = await topTen();
      const data = await response.json();
      // console.log(data);
      const gameData = data.results.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        esrb_rating: game.esrb_rating.name,
        rating: game.rating,
        released: game.released,
      }));
      console.log(gameData);
    } catch (error) {
      console.log(error);
    }
  };

  // Return search results
  const searchSingleGame = async () => {
    try {
      const response = await searchGame(searchTerm);
      const data = await response.json();
      // console.log(data);
      const gameData = data.results.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        esrb_rating: game.esrb_rating?.name,
        rating: game.rating,
        released: game.released,
      }));
      console.log(gameData);
    } catch (error) {
      console.log(error);
    }
  };

  // Return single game
  const getSingleGame = async () => {
    try {
      const response = await getGame(gameId);
      const data = await response.json();
      console.log(data);
      const gameData = {
        id: data.id,
        name: data.name,
        description: data.description,
        metacritic: data.metacritic,
        metacritic_url: data.metacritic_url,
        background_image: data.background_image,
        website: data.website,
        esrb_rating: data.esrb_rating?.name,
        rating: data.rating,
        released: data.released,
        platforms: data.platforms?.map((platform) => platform.platform.name),
      };
      console.log(gameData);
    } catch (error) {
      console.log(error);
    }
  };
// ↑↑↑ API Calls End ↑↑↑



  const user = data?.user;
  if (!user) {
    return "No user found";
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
                <Typography variant="h6">Jaguar Games</Typography>
                <Button>Login</Button>
                <Button onClick={getTopTen}>test</Button>
                <Button onClick={getSingleGame}>test</Button>
                <Button onClick={searchSingleGame}>test</Button>
              </Toolbar>
            </AppBar>

            <Card style={{ margin: 20 }}>
              <CardMedia
                component="img"
                alt="picture of jaguar games logo"
                height="200"
                image="./images/red-jaguar-games-logo.png"
              />
            </Card>

            <TextField
              variant="outlined"
              label="Game Name"
              helperText="Search for a game"
            />

            <Button
              variant="contained"
              size="small"
              href="#"
              onClick={() => alert("hello")}
            >
              Search
            </Button>

            <Typography variant="h5" style={{ color: "black" }}>
              Current Top 10 Games
            </Typography>

            <Grid container spacing={5} justify="center" alignItems="stretch">
              <Grid item xs={10} sm={5} md={5} xl={3}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "0.5px solid black",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="picture of video game"
                    style={{ objectFit: "cover" }}
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
                      style={{ marginLeft: 45 }}
                      startIcon={<SaveIcon />}
                      variant="contained"
                      size="small"
                      href="#"
                      onClick={() => alert("hello")}
                    >
                      Save to My Library
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={10} sm={5} md={5} xl={3}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "0.5px solid black",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="picture of video game"
                    style={{ objectFit: "cover" }}
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
                      style={{ marginLeft: 45 }}
                      startIcon={<SaveIcon />}
                      variant="contained"
                      size="small"
                      href="#"
                      onClick={() => alert("hello")}
                    >
                      Save to My Library
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={10} sm={5} md={5} xl={3}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "0.5px solid black",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="picture of video game"
                    style={{ objectFit: "cover" }}
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
                      style={{ marginLeft: 45 }}
                      startIcon={<SaveIcon />}
                      variant="contained"
                      size="small"
                      href="#"
                      onClick={() => alert("hello")}
                    >
                      Save to My Library
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={10} sm={5} md={5} xl={4}>
                <Card
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "0.5px solid black",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="picture of video game"
                    style={{ objectFit: "cover" }}
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
                      style={{ marginLeft: 45 }}
                      startIcon={<SaveIcon />}
                      variant="contained"
                      size="small"
                      href="#"
                      onClick={() => alert("hello")}
                    >
                      Save to My Library
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </header>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
