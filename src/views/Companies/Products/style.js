import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  navFilterSection: {
    width: '100%',
  },
  search: {
    backgroundColor: theme.palette.background.paper,
  },
  topBtns: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addBtn: {
    color: 'white',
    backgroundColor: '#080D85',
    minWidth: '149px',
    fontSize: '14px',
    textTransform: 'capitalize',
    height: 40,
    borderRadius: '6px',
    padding: '11px 16px',
    '&:hover': {
      backgroundColor: '#080D85',
      opacity: 0.8,
    },
  },
}));
