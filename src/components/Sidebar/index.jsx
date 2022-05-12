import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Drawer, Hidden, List, Typography } from '@mui/material';
import { LogOut as LogoutIcon } from 'react-feather';
import Item from './Item';
import ActiveIcon from '../Icons/ActiveIcon';
import Logo from '../Logo';

const style = {
  width: '75.31px',
  height: '24.97px',
  fontSize: '25px',
  fontStyle: 'normal',
  fontWeight: 500,
};

const Sidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const sideMenuItems = [
    {
      href: '/app/companies',
      icon: ActiveIcon,
      title: 'Companies',
    },
  ];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden auto',
        // backgroundColor: 'background.default',
        backgroundColor: '#E5E5E5',
      }}
    >
      {/* <Divider /> */}
      <Box
        sx={{
          width: 256,
          height: '100px',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '30px',
          boxShadow: 'none',
          border: 'none',
          outline: 'none',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2,
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
      </Box>
      <Box sx={{ p: 2 }}>
        <List>
          {sideMenuItems.map((item) => (
            <Item
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              subitems={item.children}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          p: 2,
        }}
      >
        <List>
          <Item logout title="exit" icon={LogoutIcon} href="#" />
          {/* {MenuFooterItems.map((item) => (
            <Item
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))} */}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: '256px',
              // top: 64,
              height: '100%',
              // height: 'calc(100% - 64px)',
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default Sidebar;
