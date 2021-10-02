import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './logIn.css'
import { Context } from "../../index";
import SignUp from './SignUp';
import SignIn from './SignIn';

const useStyles = makeStyles((theme) => ({
    btn: {
        display: 'block',
        alignItems: 'center',
        background: '#0C88A7',
        color: 'white',
        padding: '10px 5px',
        borderRadius: '4px',
        border: '1px solid #026E89',
        '&:hover': {
            background: "white",
            color: '#0C88A7',
            border: '1px solid #026E89',
        },
    },
}));
const LoginDialog = () => {
    const classes = useStyles();
    const [user, setUser] = useState('')
    const { firebase } = useContext(Context);
    const handleLogOut = () => {
        firebase.auth().signOut();
    }
    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser('');
            }
        })
    }
    useEffect(() => {
        authListener();
    }, [])
    return (
        <div>
            {user ? (<Button className={classes.btn} variant={'outlined'} color={'primary'} onClick={handleLogOut}>Вийти </Button>)
                : (
                    <div style={{ display: 'flex' }}><SignUp /><SignIn /> </div>

                )}
        </div>

    )
}

export default LoginDialog;
