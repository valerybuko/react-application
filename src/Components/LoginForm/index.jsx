import React from "react";
import TextField from "./TextField";
import { makeStyles } from '@material-ui/core/styles';
import Button from "../Button";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
        },
    },
}));

const LoginForm = (props) => {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <TextField type={'email'} id="outlined-basic" label="Email" variant="outlined" required/><br/>
            <TextField type={'password'} id="outlined-basic" label="Password" variant="outlined" required/><br/>
            <Button>Log In</Button>
        </form>
    );
};

export default LoginForm;
