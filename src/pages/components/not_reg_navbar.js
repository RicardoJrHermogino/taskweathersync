import { Button, Link, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function NotRegNavbar() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#292929' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Icon icon='charm:menu-hamburger' />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TaskWeatherSync
          </Typography>
          <Link href="/login" passHref color="inherit">
            <Button color="inherit">Login</Button>
          </Link>
          <Link href="/signup" passHref color="inherit">
            <Button color="inherit">Signup</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
