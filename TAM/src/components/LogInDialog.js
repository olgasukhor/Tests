import React, { useEffect, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './logIn/logIn.css'
import fire from './fireBase';
import { Context } from "../index";
// import firebase from 'firebase';


const useStyles = makeStyles((theme) => ({
    btn: {
        display: 'block',
        background: '#0C88A7',
        color: 'white',
        /* text-transform: uppercase; */
        padding: '10px 20px',
        borderRadius: '4px',
        border: '1px solid #026E89',
        '&:hover': {
            background: "white",
            color: '#0C88A7',
            border: '1px solid #026E89',
        },
    },

}));
function FormDialog() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { auth } = useContext(Context);
    const { firebase } = useContext(Context)

    // console.log(auth)
    // console.log(firebase)

    // const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [hasAccount, setHasAccount] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // setEmail(data.Email)
        // console.log(data)
        console.log(data.Email, data.Password);
    }
    // console.log(errors);
    // const clearErrors = () => {
    //     setEmailError('');
    //     setPasswordError('');
    // }

    // const handleLogin = () => {
    // clearErrors();
    // firebase.auth()
    //     .signInWithEmailAndPassword(email, password)
    // .catch(err => {
    //     switch (err.code) {
    //         case "auth/invalid-email":
    //         case "auth/user-disabled":
    //         case "auth/user-not-found":
    //             setEmailError(err.message);
    //             break;
    //         case "auth/wrong-password":
    //             setPasswordError(err.message);
    //             break;
    //     }
    // });
    // }

    const handleSignup = () => {
        //     clearErrors();        
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
        handleClose();
    }

    // .catch(err => {
    //     switch (err.code) {
    //         case "auth/email-already-in-use":
    //         case "auth/invalid-email":
    //             setEmailError(err.message);
    //             break;
    //         case "auth/weak-password":
    //             setPasswordError(err.message);
    //             break;
    //     }
    // });

    // const handleLogout = () => {
    //     fire.auth().signOut();
    // }
    // const authListener = () => {
    //     fire.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser('');
    //         }
    //     })
    // }

    // useEffect(() => {
    //     authListener();
    // }, [])

    return (
        <div>
            <Button className={classes.btn} variant="outlined" color="primary"
                style={{ marginLeft: 70, marginTop: 20, }}
                onClick={handleClickOpen}>
                Вхід
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Вхід</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Авторизуйтесь для входу в систему
                    </DialogContentText>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

                        <input

                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        // {...register("Password", { required: true, minLength: 4, maxLength: 25, })}
                        />

                        <input type="submit" value="Зареєструватися"
                            // onClick={handleClose}
                            onClick={handleSignup}


                        />
                    </form>
                </DialogContent>
            </Dialog>
        </div >
    );
}
export default FormDialog;