import { Typography, Paper, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button, Slide, Snackbar, Alert, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Signup_Img from '../images/add-profile-pic.jpg';
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

    const [showPassword, setShowPassword] = useState(false);
    const [imgUrl, setImgUrl] = useState();
    const [selectedImg, setSelectedImg] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [snackOpen, setSnackOpen] = useState(false);
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
        cPassword: ''
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleImgChange = (e) => {
        const img = e.target.files[0];
        if (img) {
            setImgUrl(URL.createObjectURL(img));
            console.log(img);
            setSelectedImg(img);
        }
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("profileImage", selectedImg);
        formData.append("firstName", inputs.firstName);
        formData.append("lastName", inputs.lastName);
        formData.append("email", inputs.email);
        formData.append("mobile", inputs.mobile);
        formData.append("gender", inputs.gender);
        formData.append("password", inputs.password);
        formData.append("cPassword", inputs.cPassword);

        const URL = process.env.REACT_APP_API_URL;

        axios.post(`${URL}/register`, formData)
            .then(() => {
                setError();
                setSnackOpen(true);
                setTimeout(() => {
                    navigate('/login');
                }, 2000)
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message)
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
                            Sign Up
                        </Typography>
                    </Box>
                    <Box className="signup-img">
                        <label htmlFor="signup-pic">
                            <img src={imgUrl ? imgUrl : Signup_Img} alt='' />
                            <input type="file" accept="image/*" id='signup-pic' onChange={handleImgChange} />
                        </label>
                    </Box>
                    <Box marginTop="10px">
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
                        {/* <TextField
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
                        /> */}

                        {/* Password Field */}
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

                        {/* Confirm Password Field */}
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                name='cPassword'
                                value={inputs.cPassword}
                                label="Confirm Password"
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
            <Snackbar open={snackOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                TransitionComponent={TransitionDown}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Account Created Successfully!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Signup;