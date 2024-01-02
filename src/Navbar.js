import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText,Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const my_pages = ['About Us', 'Cooking Program', 'Subcommittees', 'Exec Profiles', 'Contact Us'];
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFF6B7' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ display: { md: 'none', color: 'black'}}} />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} >
          <List >
            {my_pages.map((page) => (
              <ListItem key={page} onClick={toggleDrawer(false)}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontFamily: 'Roboto',
            letterSpacing: '.2rem',
            textDecoration: 'none',
            fontStyle: 'normal',
            fontWeight: '900',
            color: 'black',
            letterSpacing: '-1.5px',
            fontsize: '32px',
          }}
          
        >
          BIG SPOON LIL’ SPOON
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
          {my_pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 3, marginLeft: 2, color: 'black'}}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;