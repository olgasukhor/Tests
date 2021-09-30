import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        margin: '20px auto',
    },

    media: {
        height: 500,
        paddingTop: 25
    },

}));


export default function TeachersCard(props) {

    const classes = useStyles();
    return (

        <Card className={classes.root} >

            <CardContent>
                <CardMedia
                    image={props.image}
                    component="img"
                    alt="Cont"
                    className={classes.media}
                    title="as"
                />
                <Typography variant="h5" component="h2" style={{ textAlign: 'center' }}>
                    {props.name}
                </Typography>
                <Typography component="h3" color="textSecondary" gutterBottom>
                    {props.status}
                </Typography>

                <Typography variant="body2" component="p">
                    {props.description}
                    <br />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.info}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    e-mail:{props.eMail}
                </Typography>
            </CardContent>
            <CardActions>
                <Button target="_blank" rel="noreferrer" href={props.page} size="small" >Learn More</Button>
            </CardActions>

        </Card>

    );

}
