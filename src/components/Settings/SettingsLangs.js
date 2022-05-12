import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  Typography,
  FormControl,
  Select,
} from '@mui/material';
import Fade from '@mui/material/Fade';
import { setLanguage } from '../../redux/modules/lang/actions';
import { langs } from '../Language/helper';

const SettingsLanguage = ({ ...rest }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [values, setValues] = useState('');
  useEffect(() => {
    const langCode = localStorage.getItem('i18nextLng');
    const currentLang = langs.find((item) => item.code === langCode);
    setValues(currentLang.name);
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChangeLang = (item) => {
    dispatch(setLanguage(item));
  };

  // console.log('langcode', langCode);
  const handleChange = (event) => {
    setValues(event.target.value);
  };

  return (
    <Card>
      <CardHeader
        sx={{ width: '100%', backgroundColor: '#E3E4E6' }}
        title="Language preference"
      />
      <Divider />
      <CardContent>
        <Typography my={1} variant="h4" align="left">
          Select language
        </Typography>
        <FormControl variant="outlined">
          <Select
            labelId="choose-category"
            value={values}
            size="small"
            fullWidth
            onChange={(val) => handleChange(val)}
          >
            {langs.map(({ code, name, countryCode }) => (
              <MenuItem
                key={countryCode}
                value={name}
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
          </Select>
        </FormControl>
        {/* <Menu
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
        </Menu> */}
      </CardContent>
      {/* <Divider /> */}
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button color="primary" variant="contained">
          Update
        </Button>
      </Box> */}
    </Card>
  );
};

export default SettingsLanguage;
