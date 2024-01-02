import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import { Tab } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="home">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My React Showcase
        </Typography>
        <IconButton size="large" color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton size="large" color="inherit" aria-label="location">
          <LocationOnIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;