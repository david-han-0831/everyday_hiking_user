import * as React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WeatherInfo from './WeatherInfo';
import AuthButton from './AuthButton';
import DrawerMenu from './DrawerMenu';

const drawerWidth = 240;
const navItems = ['커뮤니티', '스토어', '리뷰'];

export default function CustomHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: 'white', color: 'black', boxShadow: 1 }}
      >
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
            sx={{ flexGrow: 1, fontWeight: 'bold', color: 'green' }}
          >
            <Link href="/">매일등산</Link>
          </Typography>

          <WeatherInfo />

          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                href={`/${item.toLowerCase()}`}
                sx={{ color: '#555' }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <AuthButton isLoggedIn={isLoggedIn} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerMenu onClose={handleDrawerToggle} />
      </Drawer>
    </Box>
  );
}
