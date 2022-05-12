import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    form: {
        // mb: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        gap: 6,
        width: '100%'
    },
    formFileds: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
    },
    loginBtn: {
        px: 10,
        py: 6,
        backgroundColor: '#0085FF',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#0085FF60',
        },
    },
    submitSection: {

        display: 'flex',
        flexDirection: 'column',
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    }
}));
