import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, TextField } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import CountdownTimer from '../../../components/FormElements/CountDown';
import { startTimer } from '../../../redux/modules/countDownTimer/action';

const Verify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numberPattern = /\d+/g;
  const [verifyCode, setVerifyCode] = useState('');
  const baseURL = process.env.REACT_APP_API_URL;
  const handleCodes = (e) => {
    setVerifyCode(e.target.value);
  };
  const phone = useSelector((state) => state.authReducer.phoneNumber);
  console.log('data', phone);
  const handleResend = async (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: phone.match(numberPattern).join('').slice(0),
    };
    axios
      .post(`${baseURL}/security/send-verification`, data)
      .then((res) => {
        if (res.status) {
          // navigate('/verification');
          dispatch(startTimer(true));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.append(
      'phoneNumber',
      Number(phone.match(numberPattern).join('').slice(0))
    );
    data.append('code', verifyCode * 1);
    console.log('x-form data', data);
    if (verifyCode) {
      axios
        .post(`${baseURL}/security/verify-login`, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
        .then((res) => {
          if (res.data) {
            localStorage.setItem('token', res.data.token);
            // dispatch(setToken(res.data.token));
            toast.succes('user successfully verified!');
            navigate('/');
            dispatch(startTimer(false));
          }
        })
        .catch((err) => {
          toast.error('error while verifying user!');
          console.log(err);
        });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          height: '60%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px',
          borderRadius: 50,
        }}
      >
        <Typography
          sx={{
            p: 3,
          }}
          variant="h2"
        >
          Verification!
        </Typography>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            label="Verification code"
            margin="normal"
            name="phone"
            value={verifyCode}
            onChange={(e) => handleCodes(e)}
            size="small"
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            py: 1,
          }}
        >
          <Box>
            <Typography element="p">
              pleace enter your verification code!
            </Typography>
            <CountdownTimer />
          </Box>
          <Button type="button" onClick={handleResend}>
            resend code
          </Button>
        </Box>
        <Button
          type="button"
          variant="contained"
          sx={{
            my: 6,
            px: 6,
            padding: '8px, 14px',
            borderRadius: '8px',
            backgroundColor: '#0085FF',
            textTransform: 'capitalize',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0085FF60',
            },
          }}
          disabled={verifyCode.length < 1}
          onClick={(e) => handleSubmit(e)}
        >
          Send
        </Button>
        <Button type="button" onClick={() => navigate('/sign-up')}>
          Back
        </Button>
      </form>
    </Box>
  );
};

export default Verify;
