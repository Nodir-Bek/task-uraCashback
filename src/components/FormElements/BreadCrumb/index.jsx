import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';

export default function Breadcrumb() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
    navigate('/app/products', { replace: true });
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/app/products">
      Products
    </Link>,
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="inherit"
    //   href="/app/products/create"
    //   onClick={handleClick}
    // >
    //   Form
    // </Link>,
    <Typography key="3" color="text.primary">
      Form
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
