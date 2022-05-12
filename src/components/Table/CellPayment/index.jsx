import React from 'react';
import FormControl from '@mui/material/FormControl';

export default ({ component }) => {
  return (
    <FormControl>
      <div>{component}</div>
    </FormControl>
  );
};
