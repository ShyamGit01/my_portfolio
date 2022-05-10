import * as React from 'react';
import {
  Box, Drawer, AppBar,
  CssBaseline,
  Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import Routing from '../../Routing';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const ListItemComponent = () => {
  return <Link to="/test">Check</Link>
}

export default function SideBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Shyama Sundar Swain
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home',
              'About',
              // 'Services',
              'Skills',
              'Education',
              'Experience',
              'Work',
              'Contact'].map((text, index) => (
               
                <ListItem button key={text} component='a' href={text}>
            
                  <ListItemIcon >
                   
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              
              ))}
          </List>
          <Divider />

        

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routing />

      </Box>

    </Box>
    // <h1></h1>
  );
}
