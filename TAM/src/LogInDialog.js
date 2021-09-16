import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleTextFieldChange = (e) => {
        setName(e.target.value);
    };
    const handleTextFieldChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleTextFieldChangePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div>
            <Button variant="outlined" color="primary" style={{ color: "white", border: '1px solid white' }} onClick={handleClickOpen}>
                LogIn
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Авторизуйтесь для входу в систему
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        fullWidth
                        value={name}
                        onChange={handleTextFieldChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={handleTextFieldChangeEmail}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleTextFieldChangePassword}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;