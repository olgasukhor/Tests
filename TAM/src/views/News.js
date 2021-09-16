import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    header: {
        height: 200,
        width: '100%',
        marginBottom: 20
    },
    media: {
        height: 300,
        width: 190
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: 0,
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
        textAlign: 'justify',
    },
    root: {
        minWidth: 275,
        marginBottom: 20,
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));
function News() {
    const classes = useStyles();

    return (
        <main className={classes.content}>

            <div className={classes.toolbar} />
            <CardMedia
                className={classes.header}
                component="img"
                alt=""
                image="https://images.unsplash.com/photo-1581092336206-b9e5146be6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title=""
            />
            <div className="text">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            ІІ тур Всеукраїнського конкурсу студентських робіт із напрямку

                        </Typography>
                        <Typography variant="h5" component="h2">
                            «Прикладна механіка (Механотроніка)»
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" className={classes.pos} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/Results.pdf">
                            Результати
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Захист наукових робіт на підсумковій науково-практичній конференції відбувся 28-29 квітня 2021 року у режимі відеоконференції.
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </main>
    )
}

export default News;