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
    bullet: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 500,
        paddingTop: 25
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
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
                <Typography variant="h5" component="h2">
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
                <Button target="_blank" href={props.page} size="small" >Learn More</Button>
            </CardActions>

        </Card>

    );

}
