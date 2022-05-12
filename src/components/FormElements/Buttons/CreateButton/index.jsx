import { Button } from '@mui/material';
import { useStyles } from '../style';

const CreateButton = (props) => {
  const { children, onClick, disabled } = props;
  const classes = useStyles();
  return (
    <Button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={classes.addBtn}
    >
      {children}
    </Button>
  );
};

export default CreateButton;
