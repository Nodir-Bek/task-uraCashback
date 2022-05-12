import { createStyles, makeStyles, styled } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    navActive: {
      color: 'primary.active',
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: '-15px',
        height: '100%',
        width: '3px',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: 'primary.active',
      },
      // marginTop: 300, // need check hd screen
    },
    test: {
      color: 'red',
    },
  })
);
