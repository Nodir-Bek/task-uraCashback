import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { IOSSwitch } from '../FormElements/IOSSwitch/style';
import { useStyles } from './style';

const SettingsNotifications = ({ ...rest }) => {
  const classes = useStyles();
  const [desktopNotification, setDesktopNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);
  const handleDesktopNot = () => {
    setDesktopNotification(!desktopNotification);
  };
  const handleEmailNotification = () => {
    setEmailNotification(!emailNotification);
  };

  return (
    <Card>
      <CardHeader
        sx={{
          width: '100%',
          backgroundColor: '#E3E4E6',
          color: '#000',
          fontSize: '18px',
        }}
        title="Notifications"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
            }}
          >
            <Typography variant="h4" component="h4" sx={{ width: '100%' }}>
              Allow desktop notifications
            </Typography>
            <div className={classes.switch}>
              <IOSSwitch
                checked={desktopNotification}
                required
                value={desktopNotification}
                onChange={handleDesktopNot}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
            }}
          >
            <Typography variant="h4" component="h4" sx={{ width: '100%' }}>
              Allow email notifications
            </Typography>{' '}
            <div className={classes.switch}>
              <IOSSwitch
                checked={emailNotification}
                required
                value={emailNotification}
                onChange={handleEmailNotification}
              />
            </div>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SettingsNotifications;
