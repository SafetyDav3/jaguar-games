import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { USER } from "../utils/queries";
import { DELETE_GAME, SAVE_GAME } from "../utils/mutations";
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

const Profile = () => {
  const currentUser = Auth.loggedIn();
  const { loading, error, data } = useQuery(USER, {
    variables: {
      _id: currentUser?.data?._id,
    },
  });
  const [gameList, setGameList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [gameId, setGameId] = useState("");
  // useEffect(() => {getLibrary()}, [])
  const [deleteGame] = useMutation(DELETE_GAME);
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/");
  }

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

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
        esrb_rating: game.esrb_rating?.name,
        rating: game.rating,
        released: game.released,
      }));
      setGameList(gameData);
    } catch (error) {
      console.log(error);
    }
  };

  // Return search results
  const searchGames = async () => {
    if (!searchTerm) {
      return false;
    }
    try {
      const response = await searchGame(searchTerm);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
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
      setGameList(gameData);
      setSearchTerm("");
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

  const handleDelete = async (gameId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await deleteGame({
        variables: {
          gameId: gameId,
        },
      });
    } catch (err) {
      console.error(err);
    }
    window.location.reload(false);
  };
  // ↑↑↑ API Calls End ↑↑↑

  const user = data?.user;
  if (!user) {
    return "No user found";
  }

  const getLibrary = () => {
    const library = user.savedGames.map((game) => ({
      gameId: game.gameId,
      name: game.name,
      background_image: game.background_image,
      esrb_rating: game.esrb_rating?.name,
      rating: game.rating,
      released: game.released,
    }));
    console.log(library);
    setGameList(library);
  };

  return (
    <>
      <Container maxWidth="xl">
        <div className="App" onLoad={() => getLibrary()}>
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                {/* <div>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2 }}
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                      <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Menu>
                  </div> */}
                <Typography variant="h6">Jaguar Games</Typography>
                {(Auth.loggedIn() && (
                  <>
                    <Button onClick={Auth.logout}>Logout</Button>
                    <Button href="/">Dashboard</Button>
                  </>
                )) || (
                  <>
                    <Button href="/">Dashboard</Button>
                    <Button href="/login">Login</Button>
                    <Button href="/signup">Create Account</Button>
                  </>
                )}
              </Toolbar>
            </AppBar>

            <Grid
              container
              spacing={1}
              justify="center"
              alignItems="stretch"
              style={{ padding: 20 }}
            >
              <Grid item container justify="center" style={{ height: "90%" }}>
                <Card
                  style={{
                    marginLeft: "25%",
                    marginRight: "25%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    height: "100%",
                    width: "100%",
                    maxWidth: "50%",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="picture of jaguar games logo"
                    style={{ objectFit: "cover" }}
                    image="./images/red-jaguar-games.png"
                  />
                </Card>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={1}
              onSubmit={() => searchGames()}
              justify="center"
              alignItems="stretch"
              style={{ padding: 50 }}
            >
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <TextField
                  variant="outlined"
                  label="Game Name"
                  helperText="Search for a game"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => searchGames()}
                  type="submit"
                >
                  Search
                </Button>
              </Grid>
            </Grid>

            <Typography variant="h5" style={{ color: "black" }}>
              My Library
            </Typography>

            <Grid
              container
              spacing={5}
              justify="center"
              alignItems="stretch"
              style={{ padding: 20 }}
            >
              {gameList.map((game) => {
                return (
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card
                      key={game.gameId}
                      style={{
                        height: "100%",
                        width: "100%",
                        border: "0.5px solid black",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={`picture of ${game.name}`}
                        style={{ objectFit: "cover" }}
                        image={game.background_image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {game.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Release Date: {game.released}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: {game.rating}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {Auth.loggedIn() && (
                          <Button
                            key={game.gameId}
                            style={{ marginLeft: 45 }}
                            color="secondary"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            size="small"
                            onClick={() => handleDelete(game.gameId)}
                          >
                            Remove from Library
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </header>
        </div>
      </Container>
    </>
  );
};

export default Profile;
