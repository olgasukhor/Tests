// }));
// function FormDialog() {
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const { auth } = useContext(Context);
//     const { firebase } = useContext(Context)

//     // console.log(auth)
//     // console.log(firebase)

//     // const [user, setUser] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     // const [emailError, setEmailError] = useState("");
//     // const [passwordError, setPasswordError] = useState("");
//     // const [hasAccount, setHasAccount] = useState(false)

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = (data) => {
//         // setEmail(data.Email)
//         // console.log(data)
//         console.log(data.Email, data.Password);
//     }
//     // console.log(errors);
//     // const clearErrors = () => {
//     //     setEmailError('');
//     //     setPasswordError('');
//     // }

//     // const handleLogin = () => {
//     // clearErrors();
//     // firebase.auth()
//     //     .signInWithEmailAndPassword(email, password)
//     // .catch(err => {
//     //     switch (err.code) {
//     //         case "auth/invalid-email":
//     //         case "auth/user-disabled":
//     //         case "auth/user-not-found":
//     //             setEmailError(err.message);
//     //             break;
//     //         case "auth/wrong-password":
//     //             setPasswordError(err.message);
//     //             break;
//     //     }
//     // });
//     // }

//     const handleSignup = () => {
//         //     clearErrors();        
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//         handleClose();
//     }

//     // .catch(err => {
//     //     switch (err.code) {
//     //         case "auth/email-already-in-use":
//     //         case "auth/invalid-email":
//     //             setEmailError(err.message);
//     //             break;
//     //         case "auth/weak-password":
//     //             setPasswordError(err.message);
//     //             break;
//     //     }
//     // });

//     // const handleLogout = () => {
//     //     fire.auth().signOut();
//     // }
//     // const authListener = () => {
//     //     fire.auth().onAuthStateChanged(user => {
//     //         if (user) {
//     //             setUser(user);
//     //         } else {
//     //             setUser('');
//     //         }
//     //     })
//     // }

//     // useEffect(() => {
//     //     authListener();
//     // }, [])

//     return (
//         <div>
//             <Button className={classes.btn} variant="outlined" color="primary"
//                 style={{ marginLeft: 70, marginTop: 20, }}
//                 onClick={handleClickOpen}>
//                 ????????
//             </Button>
//             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//                 <DialogTitle id="form-dialog-title">????????</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         ?????????????????????????? ?????? ?????????? ?? ??????????????
//                     </DialogContentText>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

//                         <input

//                             type="text"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         // {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         // {...register("Password", { required: true, minLength: 4, maxLength: 25, })}
//                         />

//                         <input type="submit" value="??????????????????????????????"
//                             // onClick={handleClose}
//                             onClick={handleSignup}


//                         />
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </div >
//     );
// }
// export default FormDialog;





import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import './logIn/logIn.css'
import { Context } from "../index";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { ErrorMessage } from '@hookform/error-message';

const useStyles = makeStyles((theme) => ({
    btn: {
        display: 'block',
        alignItems: 'center',
        // marginBottom: 10,
        background: '#0C88A7',
        color: 'white',
        /* text-transform: uppercase; */
        padding: '10px 5px',
        borderRadius: '4px',
        border: '1px solid #026E89',
        '&:hover': {
            background: "white",
            color: '#0C88A7',
            border: '1px solid #026E89',
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    formItem: {
        marginBottom: "15px",
    }

}));


function LogIn() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { auth, firebase } = useContext(Context);

    const { control, formState: { errors }, handleSubmit, setError } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = async ({ email, password }) => {
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            handleClose();

        } catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found": {
                    setError('password', {
                        message: error.message
                    });
                    break;
                }
                case "auth/wrong-password": {
                    setError('email', {
                        message: error.message
                    });
                    break;
                }
                default: {
                    console.error(error);
                    break;
                }
            }
        }

    }
    return (
        <div className="login">
            <Button className={classes.btn} variant="outlined" color="primary"
                onClick={handleClickOpen}>
                ????????
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">????????</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ?????????????????????????? ?????? ?????????? ?? ??????????????
                    </DialogContentText>
                    <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
                        <Controller
                            control={control}
                            name={'email'}
                            render={
                                ({ field }) => <TextField style={{ marginBottom: "10px" }} {...field} />
                            }
                        />

                        <ErrorMessage name={'email'} errors={errors} render={({ message }) => <strong className={classes.formItem}>{message}</strong>} />

                        <Controller
                            control={control}
                            name={'password'}
                            render={
                                ({ field }) => <TextField type={'password'} {...field} />
                            }
                        />

                        <ErrorMessage name={'password'} errors={errors} render={({ message }) => <strong className={classes.formItem}>{message}</strong>} />

                        <Button variant={'outlined'} color={'primary'} type={'submit'}>
                            ????????
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

function FormDialog() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { auth, firebase } = useContext(Context);

    const { control, formState: { errors }, handleSubmit, setError } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitHandler = async ({ email, password }) => {
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
            handleClose();

        } catch (error) {
            switch (error.code) {
                case 'auth/weak-password': {
                    setError('password', {
                        message: error.message
                    });
                    break;
                }
                case 'auth/email-already-in-use': {
                    setError('email', {
                        message: error.message
                    });
                    break;
                }
                default: {
                    console.error(error);
                    break;
                }
            }
        }

    }

    const [user, setUser] = useState('')

    const handleLogOut = () => {
        firebase.auth().signOut();
    }
    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('');
            }
        })
    }
    useEffect(() => {
        authListener();
    }, [])
    return (
        <div style={{ display: 'flex' }}>
            <div className="signin">

                <Button className={classes.btn} variant="outlined" color="primary"
                    onClick={handleClickOpen}>
                    ????????????????????
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">????????????????????</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ?????????????????? ????????
                        </DialogContentText>
                        <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
                            <Controller
                                control={control}
                                name={'email'}
                                render={
                                    ({ field }) => <TextField style={{ marginBottom: "10px" }} {...field} />
                                }
                            />

                            <ErrorMessage name={'email'} errors={errors} render={({ message }) => <strong className={classes.formItem}>{message}</strong>} />

                            <Controller
                                control={control}
                                name={'password'}
                                render={
                                    ({ field }) => <TextField type={'password'} {...field} />
                                }
                            />

                            <ErrorMessage name={'password'} errors={errors} render={({ message }) => <strong className={classes.formItem}>{message}</strong>} />

                            <Button variant={'outlined'} color={'primary'} type={'submit'}>
                                ??????????????????????????????
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <LogIn />
        </div >
    );
}

const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
});

export default FormDialog;