import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import Button from '../Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        },
    },
}));

const LoginFormWrapper = styled.div`
    margin: 0 auto;
`;

const ComplexForm = (props) => {
    const classes = useStyles();
    return (
        <LoginFormWrapper>
            <form className={classes.root}>
                <TextField type={'text'} id="outlined-basic" label="First name" variant="outlined" placeholder={'Your first name'} required/><br/>
                <TextField type={'text'} id="outlined-basic" label="Last name" variant="outlined" placeholder={'Your last name'} required/><br/>
                <TextField type={'email'} id="outlined-basic" label="Email" variant="outlined" placeholder={'example@acme.com'} required/><br/>
                <TextField type={'tel'} id="outlined-basic" label="Phone" variant="outlined" required/><br/>
                <TextField type={'text'} id="outlined-basic" label="Job title" variant="outlined" required/><br/>
                <TextField type={'text'} id="outlined-basic" label="Company" variant="outlined" placeholder={'Acme Inc.'} required/><br/>
                <InputLabel id="comp_size">Company size</InputLabel>
                <Select
                    id="company_size"
                >
                    <MenuItem value={100}>1 - 100</MenuItem>
                    <MenuItem value={250}>100- 250</MenuItem>
                    <MenuItem value={1000}>251 - 1000</MenuItem>
                    <MenuItem value={7500}>1001 - 7500</MenuItem>
                    <MenuItem value={10000}>7500+</MenuItem>
                </Select><br/>
                <InputLabel id="country">Country</InputLabel>
                <Select
                    id="country_list"
                >
                    <MenuItem value={'Belarus'}>Belarus</MenuItem>
                    <MenuItem value={'USA'}>USA</MenuItem>
                    <MenuItem value={'Canada'}>Canada</MenuItem>
                    <MenuItem value={'Australia'}>Australia</MenuItem>
                    <MenuItem value={'New Zealand'}>New Zealand</MenuItem>
                </Select><br/>
                <InputLabel id="help_for_you">InputLab How can our sales team help you?</InputLabel>
                <Select id="help">
                    <MenuItem value={'for organization'}>I want to evaluate Slack for my organization</MenuItem>
                    <MenuItem value={'slack plan'}>I want understand which slack plan is right for me</MenuItem>
                    <MenuItem value={'licences'}>I want to buy licences on upgrade</MenuItem>
                    <MenuItem value={'Australia'}>I have a product question</MenuItem>
                </Select><br/>
                <Button>SUBMIT</Button>
            </form>
        </LoginFormWrapper>
    );
};

export default ComplexForm;
