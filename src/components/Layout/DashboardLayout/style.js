import { styled } from '@mui/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256,
  },
  position: 'relative',
  top: 0,
  left: 0,
}));

export const Main = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  position: 'relative',
  top: 0,
  left: 0,
}));
