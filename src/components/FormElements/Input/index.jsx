import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { CssTextField } from './style';

export default (
  { className, value, disabled, name, onChange, placeholder },
  props
) => {
  return (
    <CssTextField
      {...props}
      fullWidth
      disabled={disabled}
      name={name}
      className={className}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
