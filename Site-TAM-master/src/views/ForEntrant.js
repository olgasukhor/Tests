import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';

import photo from '../img/Foto Kozlov_1.jpg'
import photo1 from '../img/105_2.jpg'
import photo2 from '../img/105_3 (1).jpg';
import Loader from "../components/Loader/Loader";



const drawerWidth = 240;

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="453"
            height="255"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        width: '100%',
        margin: 0,
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
        margin: 10,
        textAlign: 'center',
    },
    video: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    videoCard: {
        margin: 7,
    }
}));
const ForEntrant = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    })

    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />


            <CardMedia
                className={classes.media}
                component="img"
                alt=""
                image="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80v"
                title=""
            />

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant='h5'>
                        Шановний, абітурієнт!
                        запрошуємо тебе на навчання для отримання ступеня вищої освіти "бакалавр" за спеціалістю 131 – “Прикладна механіка”,
                    </Typography>

                    <Typography paragraph>
                        <a target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/ОПП_131_bakalavr_2020%20(1).pdf">
                            Освітньо-професійна програма підготовки бакалаврів
                            за спеціальністю 131 - Прикладна механіка
                        </a>
                    </Typography>


                    <Typography paragraph>
                        <a target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/ОPP%20131%20Bakalav_.pdf">
                            Освітньо-професійна програма підготовки бакалаврів
                            за спеціальністю 131 - Прикладна механіка
                            (для скорочного терміну навчання)
                        </a>
                    </Typography>

                    <Typography variant='h5'>
                        а також подальшого продовження навчання для отримання ступеня вищої  освіти "магістр"
                    </Typography>
                    <Typography variant='h6'>
                        <a target="_blank" rel="noreferrer" href="http://tam.vntu.edu.ua/images/FMT_PM_2020_2.pdf">Інформація для абітурієнта</a>
                    </Typography>

                </CardContent>
            </Card>
            {isLoading === true ?
                <div style={{ display: "flex", justifyContent: 'center' }}><Loader /> </div>
                :
                <div className={classes.video}>
                    <div className={classes.videoCard}>
                        <YoutubeEmbed embedId="qlA5IFe9HHA" />
                    </div>
                    <div className={classes.videoCard}>
                        <YoutubeEmbed embedId="1nEhpG0_vLU" />
                    </div>
                    <div className={classes.videoCard}>
                        <YoutubeEmbed embedId="TO89hRvw0w8" />
                    </div>
                    <div className={classes.videoCard}>
                        <YoutubeEmbed embedId="Muo52A7zpE8" />
                    </div>
                </div>
            }
            <Typography paragraph>
                Випусковою для зазначених спеціальностей та напрямку є кафедра “Технологій та автоматизації машинобудування”, яка забезпечує підготовку бакалаврів, спеціалістів, магістрів та докторів філософії (PhD) денної та заочної форм навчання. З 2016 р. кафедру очолює д. т. н., професор Козлов Л.Г.
            </Typography>
            <div className={classes.root}>
                <img src={photo} alt="" />
            </div>
            <Box style={{ fontSize: '1rem' }}>
                Протягом понад 50 років існування кафедра здійснює підготовку інженерів-механіків широкого профілю. На даний час підготовка фахівців здійснюється за трьома напрмяками:
                <ul>
                    <li>інформаційні технології підготовки виробництва в машинобудуванні;</li>
                    <li>технології машинобудування;</li>
                    <li>комп’ютеризовані технології та механотронні системи в машинобудуванні;</li>
                    <li>комп’ютерне проектування оснащення машинобудівного виробництва;</li>
                    <li>обладнання з числовим програмним керуванням в машинобудуванні.</li>
                </ul>
                На кафедрі діє аспірантура за науковою спеціальністю 131 -”Прикладна механіка”.
                Студенти оволодівають робітничими професіями: “Токар” та “Оператор верстатів з числовим програмним керуванням”.
            </Box>
            <div className={classes.root}>
                <img src={photo1} alt="" />
            </div>
            <Typography paragraph>
                Підготовка бакалаврів, спеціалістів та магістрів за даним фахом відповідає потребам регіону. У Вінницькій області й наближених до неї регіонах існує розвинутий машинобудівний комплекс, а також багато підприємств харчової, переробної, хімічної промисловості, до складу яких входять підрозділи, що забезпечують експлуатацію, відновлення та ремонт технологічного обладнання і потребують спеціалістів саме цього профілю.
            </Typography>
            <Typography paragraph>
                На сьогоднішній день розподіл молодих спеціалістів, підготовлених кафедрою, відбувається на 100%. Наші випуск можуть обіймати посади: інженер-конструктор, інженер-технолог, інженер- дослідник,  інженер з ТБ, майстер цеху, механік цеху та інші суміжні керівні посади. Завдяки універсальності спеціальності “Технологія машинобудування”, що забезпечує високий рівень фундаментальних та спеціальних інженерних знань, вони можуть працювати не тільки в установах і організаціях машинобудівного, сільгосптехнічного і авіаційного профілю, але й в інших галузях і напрямах.

            </Typography>

            <Typography paragraph>
                Враховуючи, що практично на всіх підприємствах машинобудівного профілю передбачається прискорення інноваційного розвитку машинобудування, зокрема, для агропромислового комплексу, за рахунок переоснащення галузі, застосування новітніх технологій та обладнання, потреби регіону в таких спеціалістах є і будуть зростати. Це забезпечить працевлаштування випускників інженерів-механіків протягом найближчих 10-15 років.
            </Typography>
            <div className={classes.root}>
                <img src={photo2} alt="" />
            </div>
            <Typography paragraph>
                Студенти-випускники кафедри ТАМ працевлаштовуються на підприємства Вінниці та Вінницької області: холдингова компанія “Nemiroff”, ВАТ “Вінницький агрегатний завод”, ВАТ “Маяк”, ЗАТ “Автоелектроапаратура” (с.м.т. Сутиски), ЗАТ “Калинівський машзавод”, ВАТ “Барський машинобудівний завод”, ВАТ “Брацлав”, ВАТ “Ямпільський приладобудівний завод”, КНВО “ФОРТ”, Турбівський машинобудівний завод “АТЕКО”, ДП “ROSHEN”, УВП “УТОС”, 45-й експериментальний завод, Картографічна фабрика, завод “Аналог”, завод “Термінал”, HВП “АДТ”, Могилів- Подільський машинобудівний завод ім. Кірова, ВАТ “Гідроциліндр”, Хмільниксільмаш, ВТТУ, НВФ “Еліт”, Вінницятрансприлад, Вінницький дослідний завод та ін.
            </Typography>
            <Typography paragraph>
                Кафедра повністю визнає необхідність поєднання змісту і цілей навчання з реаліями сучасного виробництва. В зв’язку з появою нових форм виробничої діяльності – малих підприємств, доля яких у машинобудівному комплексі постійно зростає, відповідно має зростати і попит на спеціалістів широкого, універсального характеру підготовки, що підвищує гнучкість їх адаптаційних можливостей до самостійної практичної роботи. Особливу актуальність набуває комп’ютерна підготовка майбутніх інженерів-механіків, що значно розширює можливості працевлаштування після закінчення університету. Це оволодіння сучасними пакетами програмного забезпечення: “КОМПАС-Автопроект”, “КОМПАС- Вертикаль”, “T-Flex CAD”, “KОМПАС-3D”, MathCad, MatLab та іншими. Ще одним пріоритетним напрямком підготовки молодих спеціалістів є оволодіння системами автоматизованого програмування верстатів з числовим програмним керуванням – САПР “T- Flex”, “КОМПАС-ЧПК”. Причому, студенти навчаються роботі з такими програмами на першому курсі під час отримання робітничої професії “Оператор верстатів з програмним керуванням” і більш поглиблено – на п’ятому курсі. Кафедра в навчальному процесі використовує також створені сумісно з виробничими підприємствами три філії: ВАТ “Вінницький агрегатний завод”, КНВО “ФОРТ”, УВП “УТОС”.
            </Typography>
            <Typography paragraph>
                На кафедрі працюють науково-дослідні лабораторії “Борекс-гідравліка” і “Гідроагрегат”. Розвивається прикладна теорія деформівності суцільних та пористих тіл при складному та немонотонному навантаженні. Під керівництвом професора, к. т. н. Бурєннікова Ю. А. та професора, д.т.н. Козлова Л. Г. здійснюються дослідження з моделювання та синтезу гідравлічних систем технологічних машин, під керівництвом доцента, к. т. н. Пурдика В.П. – “Розвиток наукових основ проектування систем гідроприводу та силових контурів з урахуванням нелінійних та реологічних характеристик окремих складових елементів”.
            </Typography>
        </div>

    )
}
export default ForEntrant;

