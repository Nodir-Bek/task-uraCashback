import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import Logo from '../../Logo';

const MainNavbar = ({ ...rest }) => (
  <AppBar elevation={2} {...rest}>
    <Toolbar
      sx={{
        height: 100,
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <RouterLink to="/">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
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
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
