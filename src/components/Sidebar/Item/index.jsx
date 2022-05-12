import React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@mui/material';

const NavItem = ({ href, icon: Icon, title, logout, subitems, ...rest }) => {
  const location = useLocation();
  const handleLogOut = () => {
    localStorage.removeItem('token');
  };

  const active = location.pathname.startsWith(href);

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        onClick={logout ? handleLogOut : null}
        sx={{
          color: '#1C1C1C',
          // color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            backgroundColor: '#E5F3FF',
          }),
          '& svg': {
            mr: 1,
          },
        }}
        to={href}
      >
        {Icon && <Icon size="20" active={active} />}
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  subitems: PropTypes.array,
};

export default NavItem;
