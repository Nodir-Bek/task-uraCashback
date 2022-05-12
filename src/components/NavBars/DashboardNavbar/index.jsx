import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
// import InputIcon from '@mui/icons-material/Input';
import Logo from '../../Logo';

const Navbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  // const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <AppBar
      elevation={2}
      {...rest}
      sx={{
        width: '100%',
        background: '#fff',
        // backgroundColor: 'background.default',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar
        sx={{
          height: 100,
          backgroundColor: '#fff',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <RouterLink to="/">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              // gap: 4,
            }}
          >
            <Box
              sx={{
                padding: 1,
                borderBottomRightRadius: 50,
                border: '1px solid #969696',
                backgroundColor: 'blue',
              }}
            >
              <Logo Width="40" Height="40" />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: '#1C1C1C',
                  fontWeight: 'bold',
                }}
              >
                UraCashback
              </Typography>
              <Typography
                sx={{
                  color: '#969696',
                  fontWeight: 'normal',
                }}
              >
                Tashkent-city
              </Typography>
            </Box>
          </Box>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden>
          <IconButton
            sx={{
              color: 'darker.default',
            }}
            size="large"
          >
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton onClick={onMobileNavOpen} size="large">
            <MenuIcon
              sx={{
                color: 'darker.default',
              }}
            />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default Navbar;
