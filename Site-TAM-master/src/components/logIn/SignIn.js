import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import './logIn.css'
import { Context } from "../../index";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { ErrorMessage } from '@hookform/error-message';

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
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    formItem: {
        marginBottom: "15px",
    }

}));


function SignIn() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { firebase } = useContext(Context);

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
            await firebase.auth().signInWithEmailAndPassword(email, password);
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
                Вхід
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Вхід</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Авторизуйтесь для входу в систему
                    </DialogContentText>
                    <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
                        <Controller
                            control={control}
                            name={'email'}
                            render={
                                ({ field }) => <TextField placeholder="Ваш email" style={{ marginBottom: "10px" }} {...field} />
                            }
                        />

                        <ErrorMessage name={'email'} errors={errors} render={({ message }) => <strong className={classes.formItem}>{message}</strong>} />

                        <Controller
                            control={control}
                            name={'password'}
                            render={
                                ({ field }) => <TextField placeholder="Ваш пароль" type={'password'} {...field} />
                            }
                        />

                        <ErrorMessage name={'password'} errors={errors} render={({ message }) => <strong className={classes.formItem}>{message}</strong>} />

                        <Button variant={'outlined'} color={'primary'} type={'submit'}>
                            Вхід
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
});
export default SignIn;