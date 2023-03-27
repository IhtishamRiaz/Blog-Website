import { Typography, Paper, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';

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

const ModalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFF',
    width: '500px',
    padding: '20px 30px',
    textAlign: 'center',
    borderRadius: '12px',
}

const Signup = () => {

    const [isSignUp, setIsSignUp] = useState(true);
    const [modalStatus, SetModalStatus] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        password: ''
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const handleSwitch = () => {
        setIsSignUp(!isSignUp)
        setInputs({
            name: '',
            email: '',
            mobile: '',
            gender: '',
            password: ''
        })
    }

    const handleModalOpen = () => {
        SetModalStatus(true);
    }
    const handleModalClose = () => {
        SetModalStatus(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleModalOpen();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper style={mainBox} elevation="8">
                    <Box>
                        <Typography variant='h3' textAlign="center" color={"primary"}>
                            {isSignUp ? 'Sign Up' : 'Login'}

                        </Typography>
                    </Box>
                    <Box marginTop="40px">
                        {
                            isSignUp && <TextField type={"text"} name='name' value={inputs.name} label="Name" style={inputStyle} onChange={handleChange} />
                        }



                        <TextField type={"email"} name='email' value={inputs.email} label="Email" style={inputStyle} onChange={handleChange}></TextField>



                        {
                            isSignUp && (
                                <>
                                    <TextField type={"number"} name='mobile' value={inputs.mobile} label="Mobile" style={inputStyle} onChange={handleChange}></TextField>
                                    <FormControl style={radioStyle}>
                                        <FormLabel>Gender</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel control={<Radio />} label='Male' name='gender' value='Male' onChange={handleChange}></FormControlLabel>
                                            <FormControlLabel control={<Radio />} label='Female' name='gender' value='Female' onChange={handleChange}></FormControlLabel>
                                        </RadioGroup>
                                    </FormControl>
                                </>)
                        }


                        <TextField type={"password"} name='password' value={inputs.password} label="Password" style={inputStyle} onChange={handleChange}></TextField>

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
                <Modal open={modalStatus} onClose={handleModalClose} >

                    <Box style={ModalBoxStyle}>
                        <Typography variant='h3'>User Info</Typography>

                        <Box sx={{ textAlign: 'left', marginTop: '20px' }}>
                            <Typography variant='body1'><b>Name: </b>{inputs.name}</Typography>
                            <Typography variant='body1'><b>Email: </b>{inputs.email}</Typography>
                            <Typography variant='body1'><b>Mobile: </b>{inputs.mobile}</Typography>
                            <Typography variant='body1'><b>Gender: </b>{inputs.gender}</Typography>
                            <Typography variant='body1'><b>Password: </b>{inputs.password}</Typography>
                        </Box>
                    </Box>
                </Modal>
            </form>
        </>
    );
}

export default Signup;