import { Typography, Paper, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useContext, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { blogs } from '../context/BlogsProvider';
import { useNavigate } from 'react-router-dom';

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

const Login = ({ setIsAuthenticated }) => {

    const navigate = useNavigate();
    const { setCurrentUser } = useContext(blogs);
    const [error, setError] = useState();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
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

        axios.post(`${URL}/login`, inputs)
            .then((response) => {
                setInputs({
                    email: '',
                    password: ''
                });
                setError();
                sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                setCurrentUser({
                    userId: response.data.userId,
                    userName: response.data.userName,
                    userRole: response.data.userRole
                });
                navigate('/');
                setIsAuthenticated(true);
                localStorage.setItem('isLoggedIn', 'true');
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message);
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper style={mainBox} elevation={8} className='signup-box'>
                    <Box>
                        <Typography variant='h3' textAlign="center" color={"primary"}>
                            {'Login'}
                        </Typography>
                    </Box>
                    <Box marginTop="40px">
                        <TextField
                            type={"email"}
                            name='email'
                            value={inputs.email}
                            label="Email"
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            type={"password"}
                            name='password'
                            value={inputs.password}
                            label="Password"
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        {
                            error &&
                            <p>{error}</p>
                        }
                        <Box style={btnContStyle}>
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                style={btnStyle}
                                endIcon={<LoginIcon />}
                            >
                                {'Login'}
                            </Button>
                            <Link to='/register'>
                                <Button size='large'
                                    style={btnStyle}
                                    endIcon={<Reg />}
                                >
                                    {'Switch to Sign Up'}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            </form>
        </>
    );
}

export default Login;