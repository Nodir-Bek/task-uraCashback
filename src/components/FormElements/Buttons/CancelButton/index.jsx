import { Button } from '@mui/material';
import { useStyles } from '../style';

const CancelButton = (props) => {
  const { children, onClick, disabled } = props;
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="outlined"
      disabled={disabled}
      {...props}
      onClick={onClick}
      className={classes.cancelBtn}
    >
      {children}
    </Button>
  );
};
export default CancelButton;
