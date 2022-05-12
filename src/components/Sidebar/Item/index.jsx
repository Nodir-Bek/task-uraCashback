import React, { useState } from 'react';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { useTheme } from '@mui/styles';
import PropTypes from 'prop-types';
import { Button, ListItem, Collapse, ListItemIcon } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../../redux/modules/auth/actions';
import { useStyles } from './style';

const NavItem = ({ href, icon: Icon, title, logout, subitems, ...rest }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem('token');
  };
  const handleColapse = () => {
    setIsOpen(!isOpen);
  };
  const active = location.pathname.startsWith(href);
  const currentOpen = location.pathname;

  const handleActive = (url) => {
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
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  subitems: PropTypes.array,
};

export default NavItem;
