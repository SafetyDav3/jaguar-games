import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { USER } from "../utils/queries";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const [addUser] = useMutation(ADD_USER);

  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== emailConfirm) {
      return console.error("Emails must match");
    }

    if (password !== passwordConfirm) {
      return console.error("Passwords must match");
    }
    try {
      const { data } = await addUser({
        variables: {
          username,
          password,
          email,
        },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
    setUsername("");
    setEmail("");
    setEmailConfirm("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <>
      <Container maxWidth="xl">
        <div className="App">
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
                    <Button href="/profile"></Button>
                    <Button href="/">Dashboard</Button>
                  </>
                )) || (
                  <>
                    <Button href="/">Dashboard</Button>
                    <Button href="/login">Login</Button>
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
              justify="center"
              alignItems="stretch"
              style={{ padding: 50 }}
            >
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <form onSubmit={handleSubmit}>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TextField
                      required
                      variant="outlined"
                      type="text"
                      label="Username"
                      helperText="Please enter your username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TextField
                      required
                      variant="outlined"
                      type="email"
                      label="Email"
                      helperText="Please enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TextField
                      required
                      variant="outlined"
                      type="email"
                      label="Confirm Email"
                      helperText="Please re-enter your email"
                      onChange={(e) => setEmailConfirm(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TextField
                      required
                      variant="outlined"
                      type="password"
                      label="Password"
                      helperText="Please enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TextField
                      required
                      variant="outlined"
                      type="password"
                      label="Confirm Password"
                      helperText="Please re-enter your Password"
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <Button
                      style={{ marginBottom: 200, marginTop: 20 }}
                      color="secondary"
                      variant="contained"
                      size="small"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </header>
        </div>
      </Container>
    </>
  );
};

export default Signup;
