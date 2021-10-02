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

function SignUp() {
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

    const submitHandler = async ({ email, password }) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
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

    return (
        <div style={{ display: 'flex' }}>
            <div className="signin">

                <Button className={classes.btn} variant="outlined" color="primary"
                    onClick={handleClickOpen}>
                    Реєстрація
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Реєстрація</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Заповніть поля
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
                                Зареєструватися
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div >
    );
}

const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
});

export default SignUp;