import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from './TextField';
import Button from '../Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

const LoginFormWrapper = styled.div`
    margin: 0 auto;
`;

const LoginForm = (props) => {
  const classes = useStyles();
  return (
      <LoginFormWrapper>
          <form className={classes.root}>
              <TextField type={'email'} id="outlined-basic" label="Email" variant="outlined" required/><br/>
              <TextField type={'password'} id="outlined-basic" label="Password" variant="outlined" required/><br/>
              <Button>Log In</Button>
          </form>
      </LoginFormWrapper>
  );
};

export default LoginForm;
