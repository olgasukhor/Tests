import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import VNTU from '../img/VNTU.jpg';
import IMT from '../img/IMT.jpg';
import FB from '../img/FB (1).jpg'

const useStyles = makeStyles((theme) => ({
    block: {
        direction: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        position: 'sticky',
        rigth: 0,
        top: 90,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    toolbar: {
        marginTop: 90
    },

    root: {
        minWidth: 275,
        margin: 10,
        textAlign: 'center',
    },


}));

const Partners = () => {
    const classes = useStyles();

    return (
        <div >
            <div className={classes.toolbar} />

            <Grid container className={classes.block}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant='h6'>
                            КОРИСНІ ПОСИЛАННЯ
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root}>


                    <div className={classes.root}>
                        <a target="_blank" rel="noreferrer" href="https://vntu.edu.ua/">
                            <img src={VNTU} alt="" />
                        </a>
                    </div>


                </Card>
                <Card className={classes.root}>


                    <div className={classes.root}>
                        <a target="_blank" rel="noreferrer" href="http://inmt.vntu.edu.ua/">
                            <img src={IMT} alt="" />
                        </a>
                    </div>


                </Card>
                <Card className={classes.root}>
                    <div className={classes.root}>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Прикладна-механіка-436645816708119">
                            <img src={FB} alt="" />
                        </a>
                    </div>
                </Card>
            </Grid>
        </div>
    )
}
export default Partners;

