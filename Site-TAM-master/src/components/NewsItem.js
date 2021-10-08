import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginBottom: 20,
        textAlign: 'center',
    },
}));

const NewsItem = ({ task }) => {
    const classes = useStyles();
    return (
        <div >
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {task.header}
                    </Typography>
                    <Typography paragraph>
                        {task.day}
                    </Typography>
                    <Typography paragraph>
                        {task.text}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}

export default NewsItem