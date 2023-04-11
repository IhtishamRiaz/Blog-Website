import { Typography, Paper, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';
import { blogs } from '../context/BlogsProvider';
import { useContext } from 'react';

const mainBox = {
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
    boxSizing: "border-box",
}
const inputStyle = {
    width: "100%",
    marginBottom: "20px",
}
const btnStyle = {
    marginTop: '15px',
}
const btnContStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}
const radioStyle = {
    marginBottom: '20px',
}

const Signup = () => {

    const { setUsersData, usersData } = useContext(blogs);
    const [isSignUp, setIsSignUp] = useState(true);
    const [inputs, setInputs] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        age: '',
        gender: '',
        password: ''
    });

    const idToUse = usersData[usersData.length - 1].id + 1;

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            id: idToUse,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSwitch = () => {
        setIsSignUp(!isSignUp)
        setInputs({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            age: '',
            gender: '',
            password: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setUsersData((prevState) => ([
            ...prevState, inputs
        ]))

        setInputs({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            age: '',
            gender: '',
            password: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper style={mainBox} elevation="8" className='signup-box'>
                    <Box>
                        <Typography variant='h3' textAlign="center" color={"primary"}>
                            {isSignUp ? 'Sign Up' : 'Login'}

                        </Typography>
                    </Box>
                    <Box marginTop="40px">
                        {
                            isSignUp &&
                            <>
                                <TextField
                                    type={"text"}
                                    name='firstName'
                                    value={inputs.firstName}
                                    label="First Name"
                                    style={inputStyle}
                                    onChange={handleChange}
                                />
                                <TextField
                                    type={"text"}
                                    name='lastName'
                                    value={inputs.lastName}
                                    label="Last Name"
                                    style={inputStyle}
                                    onChange={handleChange}
                                />
                            </>
                        }

                        <TextField
                            type={"email"}
                            name='email'
                            value={inputs.email}
                            label="Email"
                            style={inputStyle}
                            onChange={handleChange}
                        />

                        {
                            isSignUp && (
                                <>
                                    <TextField
                                        type={"number"}
                                        name='mobile'
                                        value={inputs.mobile}
                                        label="Mobile"
                                        style={inputStyle}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        type={"number"}
                                        name='age'
                                        value={inputs.age}
                                        label="Age"
                                        style={inputStyle}
                                        onChange={handleChange}
                                    />

                                    <FormControl
                                        style={radioStyle}
                                    >
                                        <FormLabel>
                                            Gender
                                        </FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel
                                                control={<Radio />}
                                                label='Male'
                                                name='gender'
                                                value='Male'
                                                onChange={handleChange}
                                            />
                                            <FormControlLabel
                                                control={<Radio />}
                                                label='Female'
                                                name='gender'
                                                value='Female'
                                                onChange={handleChange}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </>)
                        }


                        <TextField
                            type={"password"}
                            name='password'
                            value={inputs.password}
                            label="Password"
                            style={inputStyle}
                            onChange={handleChange}
                        />

                        <Box style={btnContStyle}>
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                style={btnStyle}
                                endIcon={isSignUp ? <Reg /> : <LoginIcon />}
                            >
                                {isSignUp ? 'Sign Up' : 'Login'}
                            </Button>

                            <Button size='large'
                                style={btnStyle}
                                endIcon={isSignUp ? <LoginIcon /> : <Reg />}
                                onClick={handleSwitch}
                            >
                                {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </form>
        </>
    );
}

export default Signup;