import { Button } from '@mui/material';
import { useStyles } from '../style';

const SaveBtn = (props) => {
  const { children, onClick, disabled } = props;
  const classes = useStyles();
  return (
    <Button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={classes.saveBtn}
      // sx={{ backgroundColor: disabled ? '#F4F6F8' : null }}
    >
      {children}
    </Button>
  );
};

export default SaveBtn;
