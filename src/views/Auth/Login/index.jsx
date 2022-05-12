import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useStyles } from './style';

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    login: Yup.string().required('Login is  required'),
    password: Yup.string().max(8).required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // const data = new URLSearchParams();
      // data.append('phoneNumber', values.phone);
      navigate('/');
    },
  });

  // const handleForgot = () => {
  //   navigate('/sign-up');
  // };
  return (
    <>
      <Helmet>
        <title>Login | UraCashback</title>
      </Helmet>
      <Box className={classes.root}>
        <Container
          maxWidth="sm"
          sx={{
            p: 5,
            borderRadius: '8px',
          }}
        >
          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <Box>
              <div className={classes.formFileds}>
                <Typography sx={{ width: '50%' }} variant="h5">
                  Login
                </Typography>
                <TextField
                  error={Boolean(formik.touched.login && formik.errors.login)}
                  fullWidth
                  helperText={formik.touched.login && formik.errors.login}
                  margin="normal"
                  name="login"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="test"
                  value={formik.values.login}
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  sx={{ borderRadius: '8px' }}
                />
              </div>
              <div className={classes.formFileds}>
                <Typography sx={{ width: '50%' }} variant="h5">
                  Password
                </Typography>
                <TextField
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                  autoComplete="off"
                  size="small"
                />
              </div>
            </Box>
            <Box className={classes.submitSection}>
              <Button
                // disabled={formik.isSubmitting}
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  my: 6,
                  padding: '8px, 14px',
                  borderRadius: '8px',
                  backgroundColor: '#0085FF',
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: '#0085FF60',
                  },
                }}
              >
                Login
              </Button>
              <Typography color="textSecondary" variant="body1">
                Don`t have an account?
                <Link
                  sx={{
                    margin: '0px 4px',
                    textDecoration: 'underline',
                  }}
                  component={RouterLink}
                  to="/sign-up"
                  variant="h6"
                  underline="hover"
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </form>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Box>
    </>
  );
};

export default Login;
