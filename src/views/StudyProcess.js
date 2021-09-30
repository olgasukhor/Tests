import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from "@material-ui/core";
import books from "../dataLists/books";
import booksMethod from "../dataLists/booksMethod"
import lessons from "../dataLists/lessons";
import lessonsMagistr from '../dataLists/lessonsMagistr';
import { Button } from "@material-ui/core";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        width: '100%',
        marginBottom: 20
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
    listItem: {
        fontSize: 18,
    },
    header: {
        backgroundColor: '#B5D3DE',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));
function StudyProcess() {
    const classes = useStyles();

    const booksList = books.map(item => {
        return <li key={item.id}>{item.title}</li>
    })
    const booksMethodList = booksMethod.map(item => {
        return <li key={item.id}>{item.title}</li>
    })

    const lessonsList = lessons.map(item => {
        return <li key={item.id}><a target="_blank" rel="noreferrer" href={item.href1}>{item.title}</a> <a target="_blank" rel="noreferrer" href={item.href2}>{item.Dform}</a><a target="_blank" rel="noreferrer" href={item.href3}>{item.Zform}</a></li>
    })
    const lessonsListM = lessonsMagistr.map(item => {
        return <li key={item.id}><a target="_blank" rel="noreferrer" href={item.href1}>{item.title}</a> <a target="_blank" rel="noreferrer" href={item.href2}>{item.Dform}</a><a target="_blank" rel="noreferrer" href={item.href3}>{item.Zform}</a></li>
    })
    return (
        <main className={classes.content}>

            <div className={classes.toolbar} />
            <CardMedia
                className={classes.media}
                component="img"
                alt=""
                image="https://images.unsplash.com/photo-1581093803931-46e730e7622e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                title=""
            />
            <Typography className={classes.header} variant="h5">
                Дисципліни, які викладаються для освітньо-кваліфікаційного рівня бакалавр :
            </Typography>
            <ol className={classes.listItem}>
                {lessonsList}
            </ol>
            <Typography className={classes.header} variant="h5">
                Дисципліни, які викладаються для освітньо-кваліфікаційного рівня спеціаліст та магістр :
            </Typography>
            <ol className={classes.listItem}>
                {lessonsListM}
            </ol>

            <Typography className={classes.header} variant="h5">
                Випускні кваліфікаційні роботи кафедри
            </Typography>
            <Typography paragraph>
                Методичні вказівки до виконання бакалаврських дипломних робіт для студентів спеціальності -131 "Прикладна механікка"
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://lozinskyi.vk.vntu.edu.ua/file/2018/51351c7de77b41a45b16b1f6b7c706c8.pdf">
                    Відкрити
                </Button>
            </Typography>
            <Typography paragraph>
                Методичні вказівки для виконання магістерських кваліфікаційних робіт для студентів спеціальності -131 "Прикладна механікка"
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://lozinskyi.vk.vntu.edu.ua/file/2018/446446d189cabbf6e6da2a592edc4602.pdf">
                    Відкрити
                </Button>
            </Typography>
            <Typography className={classes.header} variant="h5">
                Програма державного кваліфікаційного іспиту зі спеціальності
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://lozinskyi.vk.vntu.edu.ua/file/2018/537dbc718b2f33e29abf9c3c5ea1b441.pdf">
                    Відкрити
                </Button>

            </Typography>
            <div style={{ marginBottom: "15px" }}></div>
            <Typography className={classes.header} variant="h5">
                Програми переддипломних практик
            </Typography>
            <Typography paragraph>
                Програма переддипломної практики студентів-бакалаврів спеціальності 131 "Прикладна механікка"
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://lozinskyi.vk.vntu.edu.ua/file/2018/a1183678851971cbd1003cadc183729a.pdf">
                    Відкрити
                </Button>

            </Typography>
            <Typography paragraph>
                Програма переддипломної практики студентів-магістрів спецфіальності 131 "Прикладна механіка"
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://lozinskyi.vk.vntu.edu.ua/file/2018/95e9f04747eb01ab0880f72d09bde3c1.pdf">
                    Відкрити
                </Button>
            </Typography>
            <div></div>
            <Typography className={classes.header} variant="h5">
                Курсові роботи та проекти
            </Typography>
            <Typography paragraph>
                "Інформатика" - курсова робота.
                Методичні вказівки для виконання курсової роботи
                {/* <a target="_blank" href='http://petrov.vk.vntu.edu.ua/file/4f879bc68f8345e6a3a8eb942993154d.pdf'> ЗАВАНТАЖИТИ
                </a> */}
            </Typography>
            <Typography paragraph>
                "Взаємозамінність, стандартизація та технічні вимірювання" - курсова робота. Методичні вказівки для виконання курсової роботи
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/KR%20VSTV.part1.rar">
                    частина 1
                </Button>
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/KR%20VSTV.part2.rar">
                    частина 2
                </Button>
            </Typography>

            <Typography paragraph>
                "Гідравліка, гідро- та пневмоприводи" - курсова робота.
                Методичні вказівки для виконання курсової роботи
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/Metoda%20KR%20G_GPP_1.part1.rar">
                    частина 1
                </Button>
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/Metoda%20KR%20G_GPP_1.part2.rar">
                    частина 2
                </Button>
            </Typography>

            <Typography paragraph>
                "Технологія машинобудування" - курсовий проект.
                Навчальний посібник для виконання курсового проекту
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/Texmash.%20Kurs%20proekt.rar">
                    Скачати
                </Button>
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/Metod_Texmash_dodatky.rar">
                    Додатки
                </Button>
            </Typography>

            <Typography paragraph>
                "САПР технологічної підготовки машинобудівного виробництва (САПР ТПМВ)" - курсова робота.
                Методичні вказівки до виконання курсової роботи
                {/* <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://petrov.vk.vntu.edu.ua/file/8f4633f2e4c43a179721ea392e2cc279.pdf">
                    Відкрити
                </Button> */}
            </Typography>

            <Typography paragraph>
                "Комп'ютерне проектування технологічного оснащення" - курсовий проект.
                Навчальний посібник до виконання курсового проекту
                {/* <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://petrov.vk.vntu.edu.ua/file/a85367c9ce80e1561ee9a79f6b28b57a.pdf">
                    Відкрити
                </Button> */}
            </Typography>
            <Typography paragraph>
                "Проектування пристосувань" курсовий проект.
                Навчальний посібник для виконання курсового проекту
                {/* <Button variant="contained" size="small" className={classes.margin} target="_blank" href="http://petrov.vk.vntu.edu.ua/file/72e4de1b5b2d491bb7f31e7a3995a542.pdf">
                    Відкрити
                </Button> */}
            </Typography>
            <Typography paragraph>
                "Роботизовані технологічні комплекси та СПА верстатів з ЧПК"
                Методичні вказівки для виконання курсової роботи
                <Button variant="contained" size="small" className={classes.margin} target="_blank" rel="noreferrer" href="http://lozinskyi.vk.vntu.edu.ua/file/2018/d4f2c78cae7c78fe95215ba398a69837.pdf">
                    Відкрити
                </Button>
            </Typography>


            <Typography className={classes.header} variant="h5">
                Навчально методичні розробки викладачів кафедри
            </Typography>
            <Typography variant="h6">
                Навчальні посібники
            </Typography>
            <Typography paragraph>
                {booksList}
            </Typography>
            <Typography variant="h6">
                Методичні вказівки
            </Typography>
            <Typography paragraph>
                {booksMethodList}
            </Typography>

        </main >
    )
}

export default StudyProcess;


