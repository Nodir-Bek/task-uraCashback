import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import InputMask from 'react-input-mask';
import auth from '../../../services/auth';
import { setAuthData } from '../../../redux/modules/auth/actions';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numberPattern = /\d+/g;
  const baseURL = process.env.REACT_APP_API_URL;

  const handleRegister = (e, phone) => {
    e.preventDefault();
    // const data = new URLSearchParams();
    // data.append('phoneNumber', phone.match(numberPattern).join('').slice(0));
    const data = {
      phoneNumber: phone.match(numberPattern).join('').slice(0),
    };
    if (phone) {
      axios
        .post(`${baseURL}/security/send-verification`, data)
        .then((res) => {
          if (res.status) {
            dispatch(setAuthData(phone.match(numberPattern).join('').slice(0)));
            navigate('/verification');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Register | UraCashback</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              phone: '',
            }}
            validationSchema={Yup.object().shape({
              phone: Yup.string().max(255).required('Phone number is required'),
            })}
            onSubmit={() => {
              navigate('/app/dashboard');
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Register new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <InputMask
                  placeholder="+998 (_ _) _ _ _ - _ _ - _ _"
                  mask="+\9\98 (99) 999-99-99"
                  maskChar=" "
                  disabled={false}
                  error={Boolean(touched.phone && errors.phone)}
                  fullWidth
                  helperText={touched.phone && errors.phone}
                  // label="Phone number"
                  margin="normal"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  size="small"
                  variant="outlined"
                >
                  {(inputProps) => <TextField {...inputProps} />}
                </InputMask>

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    onClick={(e) => handleRegister(e, values.phone)}
                    disabled={isSubmitting}
                    sx={{
                      my: 6,
                      padding: '8px, 14px',
                      borderRadius: '8px',
                      backgroundColor: 'blue',
                      textTransform: 'capitalize',
                      '&:hover': {
                        backgroundColor: '#0000ff80',
                      },
                    }}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Register now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account?{' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                    underline="hover"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
