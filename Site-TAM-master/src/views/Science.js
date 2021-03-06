import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import articles from '../dataLists/articles'
import ArticleCard from "../components/ArticleCard";
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
    header: {
        backgroundColor: '#B5D3DE',
    },

}));
function Science() {
    const classes = useStyles();
    const ArticleItems = articles.map(item => {
        return (
            <ArticleCard
                key={item.id}
                name={item.name}
                title={item.title}
                description={item.description}
            />
        )
    })

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <CardMedia
                className={classes.media}
                component="img"
                alt=""
                image="https://images.unsplash.com/photo-1581092333203-42374bcf7d89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                title=""
            />

            <Typography paragraph>
                Наукова робота фахівців кафедри ТАМ здійснюється за двома напрямами: «Моделювання, синтез та покращення техніко-економічних показників гідросистем та гідроагрегатів технологічних та мобільних робочих машин», а також «Розвиток прикладної теорії деформованості суцільних і пористих тіл при складному навантаженні та удосконалення на цій основі технологічних процесів обробки металів тиском». Перший напрям включає: проектування випробувальної техніки та дослідження агрегатів систем гідроприводів; дослідження хвильових процесів в довгих трубопроводах мобільних робочих машин; підвищення рівномірності руху робочих органів технологічних машин з гідроприводом; проектування та дослідження розподільної та запірної гідроапаратури. До другого напряму відносяться дослідження процесів обробки металів тиском на основі феноменологічної теорії деформуємості.
            </Typography>
            <Typography className={classes.header} variant="h5">
                ОСНОВНІ НАУКОВІ НАПРЯМИ РОЗВИТКУ КАФЕДРИ
            </Typography>
            <Typography paragraph>
                Серед основних напрямів розвитку кафедри ТАМ слід відзначити такі:
            </Typography>
            <Typography paragraph>

                <ListItem>1. Розвиток прикладної теорії деформуємості металів та удосконалення на цій основі технологій поверхневого пластичного деформування та обробки металів тиском.</ListItem>
                <ListItem>2. Підвищення ефективності регульованих гідромеханізмів технологічних та мобільних машин (проф. Бурєнніков Ю.А.).</ListItem>
                <ListItem>3. Механотронні системи управління мобільних робочих машин (проф. Козлов Л.Г.).</ListItem>
                <ListItem>4. Дослідження технологічних процесів в машинах із засобами гідроавтоматики для виробництва альтернативного палива з біомаси (доц. Пурдик В.П.).</ListItem>
                <ListItem>5. Електрогідравлічні стежні приводи технологічних та випробувальних машин (доц. Дерібо О.В.).</ListItem>
                <ListItem>6. Хвильові процеси в довгих трубопроводах технологічних машин та дослідження характеристик рукавів високого тиску (доц. Дусанюк Ж.П.).</ListItem>
                <ListItem>7. Розробка та дослідження гідравлічних систем машин для ресурсних випробувань рукавів високого тиску та гідромоторів (доц. Муляр Ю.І.)</ListItem>
                <ListItem>8. Пневмо-гідравлічні системи випробувальних машин (ст. викл. Мироненко О.М.).</ListItem>
                <ListItem>9. Пропорційні системи керування енергоощадними гідроприводами мобільних робочих машин (доц. Петров О.В., ст. викл. Лозінський Д.О., доц. Репінський С.В., інж. Брицький О.Л.).</ListItem>
                <ListItem>10. Пластичне деформування листових матеріалів та циліндричних заготовок методами штампування, обкочування та поперечно-клиновій прокатки (доц. Савуляк В.В., доц. Сухоруков С.І., ас. Сердюк О.В.).</ListItem>
            </Typography>
            <Typography className={classes.header} variant="h5">
                МІЖНАРОДНА НАУКОВА СПІВПРАЦЯ
            </Typography>
            <Typography paragraph>
                На кафедрі ТАМ підтримуються зв’язки з закордонними виробничими та навчальними установами, зокрема: австрійською фірмою «FESTO», німецькою фірмою «SIEMENS», технічним університетом імені Георга Асахі міста Яси (Румунія), Московським державним технічним університетом «МАМИ», Московським державним індустріальним університетом, Балтійським державним технічним університетом («Военмех», м. Санкт-Петербург).
            </Typography>
            <Typography className={classes.header} variant="h5">
                НАУКОВІ ЗВ’ЯЗКИ КАФЕДРИ
            </Typography>
            <Typography paragraph>
                На кафедрі ТАМ ведуться спільні науково-дослідні роботи з багатьма провідними науковими і навчальними установами України: Інститут надтвердих матеріалів ім. В.М. Бакуля НАН України, Інститут проблем матеріалознавства ім. І.М. Францевича НАН України, Донецький фізико-технічний інститут НАН України, Донбаська машинобудівна академія (м. Краматорськ), Національна металургійна академія (м. Дніпропетровськ), Національний технічний університет України «КПІ», Східноукраїнський національний університет ім. В.І. Даля (м. Луганськ), Луцький національний технічний університет, Одеський національний політехнічний університет, Хмельницький національний університет, Кременчуцький національний університет ім. М.В. Остроградського, Чернігівський державний технологічний університет.
            </Typography>
            <Typography className={classes.header} variant="h5">
                ДИСЕРТАЦІЇ ВИКОНАНІ НА КАФЕДРІ ТАМ
            </Typography>
            <ListItem>У 2011 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук аспірантом кафедри Репінським С.В. на тему "Система керування аксіально-поршневого регульованого насоса з профільованим вікном золотника комбінованого регулятора подачі ", керівник – керівник – к.т.н., професор Бурєнніков Ю.А.</ListItem>
            <ListItem>У 2010 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук аспірантом кафедри Петровым О.В. на тему "Гідропривод чутливий до навантаження на базі мультирежимного гідророзподільника", керівник – к.т.н., професор Козлов Л.Г.</ListItem>
            <ListItem>У 2010 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук аспірантом кафедри Лозінским Д.О. на тему "Пропорційний електрогідравлічний розподільник з незалежним керуванням потоків для мобільних машин", керівник – к.т.н., професор Козлов Л.Г.</ListItem>
            <ListItem> 2010 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук аспірантом кафедри Сухоруковим С.І. на тему "Удосконалення технології плоскої поперечно-клинової прокатки ступінчастих циліндричних заготовок", керівник – д.т.н., професор Сивак І.О.</ListItem>
            <ListItem>У 2007 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук здобувачем кафедри Коцюбівскою К.І. на тему "Підвищення ефективності процесів холодного поперечного видавлювання осесиметричних заготовок з фланцем за рахунок використання протитиску", керівник – к.т.н., професор Бурєнніков Ю.А.</ListItem>
            <ListItem>У 2007 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук аспірантом кафедри Савуляком В.В. на тему "Холодне формування заготовок з мінімальними радіусами кривизни з важкодеформівних листових матеріалів", керівник – д.т.н., професор Сивак І.О.</ListItem>
            <ListItem>У 2000 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук здобувачем кафедри Козловым Л.Г. на тему "Удосконалення системи керування гідроприводів з LS-регулюванням", керівник – к.т.н., професор Бурєнніков Ю.А.</ListItem>
            <ListItem>У 1999 р. була захищена дисертация на здобуття наукового ступеня кандидата технічних наук здобувачем кафедри Гунько І.В. на тему: "Груповий гідропривод роботи органів машин сільськогосподарського призначення з послідовним з’єднанням гідромоторів", керівник – к.т.н., доцент Іванов М.І.</ListItem>

            <Typography className={classes.header} variant="h6">
                Наукові праці викладачів кафедри
            </Typography>

            <ol>{ArticleItems}</ol>



        </main>
    )
}

export default Science;


