// src/NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles'; 
import { NavLink, Link as RouterLink } from 'react-router-dom';


const Logo = styled('div')({
  fontWeight: 'bold',
  color: 'black',
  textDecoration: 'none',
  marginRight: '16px', 
  fontSize: '40px',
});


const Ads = styled('span')({
  color: 'rgb(176, 12, 12)',
});

const CustomPostAdButton = styled(Button)({
    color: 'white',
    backgroundColor: 'rgb(176, 12, 12)',
    borderRadius: '20px', 
    '&:hover': {
      backgroundColor: 'rgba(176, 12, 12, 0.8)', 
    },
  });


function NavigationBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}> 
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" component={RouterLink} style={{ textDecoration: 'none' }}>
            <Logo>
              ABC
              <Ads>ads</Ads>
            </Logo>
          </Link>
        </Typography>

        <Button component={RouterLink} to="/" color="inherit" style={{ marginLeft: 'auto',  color: 'black' }}>
          Home
        </Button>
        <Button component={RouterLink} to="/browse" color="inherit" style={{ color: 'black' }}>
          Browse Ads
        </Button>
        <Button component={RouterLink} to="/about" color="inherit" style={{ color: 'black' }}>
          About Us
        </Button>

        <Button component={RouterLink} to="/login" color="inherit" style={{ color: 'black' }}>
          Login
        </Button>

        <CustomPostAdButton component={RouterLink} to="/post-ad" color="secondary">
          Post an Ad
        </CustomPostAdButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
/*
function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
*/