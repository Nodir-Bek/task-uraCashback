import { styled } from '@mui/styles';

export const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

export const Wrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
});

export const Container = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

export const Content = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});
