import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import LoginDialog from '../components/LogInDialog';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DomainIcon from '@material-ui/icons/Domain';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import logo from '../img/logo.jpg';





function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#026E89',
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,

    // },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    marginRight: 10,

  },
  logo: {
    display: 'flex',
  },
  headerName: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }

}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>

      <div className={classes.toolbar} />
      {/* <Divider /> */}
      <List style={{ marginTop: "30px" }}>

        <ListItem button component={Link} to="/about" key='??????????????'>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <ListItemText primary='??????????????' />
        </ListItem>
        <ListItem button component={Link} to="/history" key='?????????????????? ??????????????'>
          <ListItemIcon><PeopleOutlineIcon /></ListItemIcon>
          <ListItemText primary='?????????????????? ??????????????' />
        </ListItem>
        <ListItem button component={Link} to="/structure" key='??????????????????'>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary='??????????????????' />
        </ListItem>
        <ListItem button component={Link} to="/science" key='??????????'>
          <ListItemIcon><DomainIcon /></ListItemIcon>
          <ListItemText primary='??????????' />
        </ListItem>

        <ListItem button component={Link} to="/study" key='???????????????????? ????????????'>
          <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
          <ListItemText primary='???????????????????? ????????????' />
        </ListItem>
        <ListItem button component={Link} to="/news" key='????????????'>
          <ListItemIcon><ChatIcon /></ListItemIcon>
          <ListItemText primary='????????????' />
        </ListItem>
        <ListItem button component={Link} to="/forEntrant" key='?????? ??????????????????????'>
          <ListItemIcon><LocalLibraryIcon /></ListItemIcon>
          <ListItemText primary='?????? ??????????????????????' />
        </ListItem>
        <Divider />


      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div className="left" style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap className={classes.logo}>
              <Avatar alt="" src={logo} className={classes.avatar} />
              <div className={classes.headerName}>?????????????? ???????????????????? ???? ?????????????????????????? ??????????????????????????????</div>
            </Typography>
          </div>

          <LoginDialog />
        </Toolbar>

      </AppBar>


      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
