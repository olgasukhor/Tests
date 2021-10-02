import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        zIndex: 2,
        backgroundColor: '#026E89',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        flexGrow: 1,
        marginLeft: 0,

    },

}));
function Copyright() {
    return (
        <Typography variant="body2" color="inherit">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Box>
                <CssBaseline />
                <Box>
                    <Container>
                        <Typography variant="body1">
                            Кафедра ТАМ.
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </div>

    );
}