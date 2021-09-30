import teachers from "../dataLists/teachers"
import TeachersCard from '../components/TeachersCard';
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        display: 'flex',
        flexWrap: "wrap",
        marginLeft: 0,
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
        textAlign: 'justify',
    },

}));
const Structure = () => {
    const classes = useStyles();
    const TeachersItem = teachers.map(item => {
        return (
            <TeachersCard
                key={item.id}
                image={item.image}
                name={item.name}
                status={item.status}
                description={item.description}
                info={item.info}
                info2={item.info2}
                eMail={item.eMail}
                page={item.page}
            />
        )
    })
    return (
        <div className={classes.content}>
            {TeachersItem}
        </div>

    )
}
export default Structure;