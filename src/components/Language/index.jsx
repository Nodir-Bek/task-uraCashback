import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import Fade from '@mui/material/Fade';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { langs } from './helper';
import { setLanguage } from '../../redux/modules/lang/actions';

export default () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const langCode = localStorage.getItem('i18nextLng');
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChangeLang = (item) => {
    dispatch(setLanguage(item));
  };
  return (
    <div>
      <IconButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        // sx={{
        //   width: '25px',
        //   height: '25px',
        // }}
      >
        {/* <LanguageIcon
          sx={{
            color: '#000',
          }}
        /> */}
        <span
          style={{
            borderRadius: '50%', // 'border-radius': '50%',
            width: '26px',
            height: '28px',
          }}
        >
          <i
            style={{
              borderRadius: '50%', // 'border-radius': '50%',
              width: '26px',
              height: '28px',
            }}
            className={`w-100 h-100 border flag-icon flag-icon-${langCode}`}
          />
        </span>
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {langs.map(({ code, name, countryCode }) => (
          <MenuItem
            key={countryCode}
            onClick={() => {
              onChangeLang(code);
              i18next.changeLanguage(code);
              localStorage.setItem('i18nextLng', code);
              handleClose();
            }}
          >
            <span className={`mr-2 flag-icon flag-icon-${code}`} />
            &nbsp;
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
