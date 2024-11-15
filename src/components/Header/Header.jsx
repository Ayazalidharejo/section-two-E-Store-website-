import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, Menu, MenuItem } from '@mui/material';

import Hero from "../../acsses/clock.avif";
import Hero2 from "../../acsses/cream.avif";
import Hero3 from "../../acsses/cream2.avif";
import Hero4 from "../../acsses/watch.avif";
import Hero5 from "../../acsses/ele3.avif"
import Hero6 from "../../acsses/ele.jpg"
import Hero7 from "../../acsses/eight.avif"
import {  Card, Rating } from '@mui/material'
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Header (props) {
  const Products=[
    {
  
      Name:"Product-2 ",
      Price:350,
      img:Hero ,
  },
    {
  
      Name:"Product-3 ",
      Price:450,
      img:Hero2 ,
  },
    {
  
      Name:"Product-4 ",
      Price:550,
      img:Hero3 ,
  },
    {
  
      Name:"Product-5 ",
      Price:650,
      img:Hero4 ,
  },
    {
  
      Name:"Product-6 ",
      Price:150,
      img:Hero5 ,
  },
    {
  
      Name:"Product-7 ",
      Price:950,
      img:Hero6 ,
  },
    {
  
      Name:"Product-8 ",
      Price:220,
      img:Hero7 ,
  },
    
  
  ]
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {



    setMobileOpen((prevState) => !prevState);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       E-Store
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  
  return (
    <>    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          E-Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
              <Button className='text-white'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AccountCircleIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}> <NavLink to="/signin"> My account</NavLink> </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
    
      </Box>
    </Box>
     <div className='d-flex gap-2  container'>
     {
        Products.map((item)=>{
         return(
           <div className='d-flex'>
          <Card >
          <Box >
 <img className='d-flex align-items-center p-3 object-fit-cover ' style={{width:"180px", minHeight:"100px",maxHeight:"180px"}} src={item.img} alt="" />
 <Rating className='ms-4' name="read-only" value={3} readOnly />
 <Typography className='text-center' variant='body1'>{item. Name} </Typography>
 <Typography className='text-center' variant='body2'>{item. Price} </Typography>
 
           </Box>
           </Card>
           </div>
         )
        })
     }
    
    </div>
    </>

  );
}

Header.propTypes = {

  window: PropTypes.func,
};

export default Header;
