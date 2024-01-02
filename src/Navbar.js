import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Company Name and Logo on the Left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Company Name
        </Typography>

        {/* Menu Options on the Right */}

        {/* Additional Menu Options */}
        <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
          Option 1
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
          Option 2
        </Typography>
        <Typography variant="h6" component="div">
          Option 3
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
