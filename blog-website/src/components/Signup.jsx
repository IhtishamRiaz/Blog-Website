import { Typography, Paper, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button, containerClasses } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const mainBox = {
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "100px",
    marginBottom: "120px",
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
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
        cPassword: ''
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const URL = "http://localhost:8080";

        axios.post(`${URL}/register`, inputs)
            .then(() => {
                setInputs({
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobile: '',
                    gender: '',
                    password: '',
                    cPassword: ''
                });
                setError();
                navigate('/login');

            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message)
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper style={mainBox} elevation={8} className='signup-box'>
                    <Box>
                        <Typography variant='h3' textAlign="center" color={"primary"}>
                            Sign Up
                        </Typography>
                    </Box>
                    <Box marginTop="40px">
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
                        <TextField
                            type={"email"}
                            name='email'
                            value={inputs.email}
                            label="Email"
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            type={"number"}
                            name='mobile'
                            value={inputs.mobile}
                            label="Mobile"
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
                        <TextField
                            type={"password"}
                            name='password'
                            value={inputs.password}
                            label="Password"
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            type={"password"}
                            name='cPassword'
                            value={inputs.cPassword}
                            label="Confirm Password"
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        {error &&
                            <div className='error-container'><p>{error}</p></div>
                        }
                        <Box style={btnContStyle}>
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                style={btnStyle}
                                endIcon={<Reg />}
                            >
                                {'Sign Up'}
                            </Button>
                            <Link to='/login'>
                                <Button size='large'
                                    style={btnStyle}
                                    endIcon={<LoginIcon />}
                                >
                                    {'Switch to Login'}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            </form>
        </>
    );
}

export default Signup;