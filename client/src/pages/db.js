import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// const pages = ['Logout'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const user = data?.user
    if (!user) {
        return 'No user found'
    }
    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>{user.email}</p>
            <p>{user._id}</p>
            <p>{user.savedGames[0].name}</p>
            <button onClick={Auth.logout}>Logout</button>
        </div>
    )


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = () => {
    
  }

  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Card style={{ margin: 20 }}>
              <CardMedia
                component="img"
                alt="banner with jaguar games title"
                height="50"
                image="./images/red-jaguar-games.png"
              />
            </Card>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jaguar Games
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jaguar Games
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

                <MenuItem href='./profile'>Profile</MenuItem>
                <MenuItem href='./logout'>Logout</MenuItem>
                
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

export default ResponsiveAppBar;





// const Board = () => {
//     const navigate = useNavigate()
//     const currentUser = Auth.loggedIn()
//     const {loading, error, data} = useQuery(USER, {
//         variables: {
//             _id: currentUser?.data?._id
//         }
//     })
//     if (!currentUser) {
//         navigate('/login')
//     }
//     if (loading) return 'Loading...'
//     if (error) return `Error! ${error.message}`

//     const user = data?.user
//     if (!user) {
//         return 'No user found'
//     }
//     return (
//         <div>
//             <h1>Welcome, {user.username}</h1>
//             <p>{user.email}</p>
//             <p>{user.savedGames}</p>
//             <button onClick={Auth.logout}>Logout</button>
//         </div>
//     )
// }

// export default Board
