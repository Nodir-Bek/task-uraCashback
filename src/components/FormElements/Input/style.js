import { styled } from '@mui/styles';
import { TextField } from '@mui/material';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#080D85',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#080D85',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#080D85',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#080D85',
    },
  },
  borderRadius: '8px',
});
