
import { Icon } from "@iconify/react";
import { AppBar, Toolbar, IconButton, Avatar, Typography } from "@mui/material";


export default function Navbar() {
  return (
    <>
    
    <AppBar position="static" sx={{backgroundColor: '#292929'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Icon icon = 'charm:menu-hamburger' />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TaskWeatherSync
          </Typography>     
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
        </Toolbar>
      </AppBar>


    </>
  );
}
