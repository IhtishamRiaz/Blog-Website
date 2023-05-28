import { Typography, Paper, TextField, Button, Slide, Snackbar, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
    color: '#1b1b1b',
}
const btnContStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}

const Login = ({ setIsAuthenticated }) => {

    const navigate = useNavigate();
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = process.env.REACT_APP_API_URL;

        axios.post(`${URL}/login`, inputs)
            .then((response) => {
                setError();
                localStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                localStorage.setItem('currentUser', response.data.userId);
                setIsAuthenticated(true);
                setSnackOpen(true);
                setTimeout(() => {
                    navigate('/');
                    window.location.reload();
                }, 2000);
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message);
                }
            })
    }
    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackOpen(false);
    };

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
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={inputs.password}
                                label="Password"
                                style={inputStyle}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
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
            <Snackbar open={snackOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                TransitionComponent={TransitionDown}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Logged in Successfully!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Login;