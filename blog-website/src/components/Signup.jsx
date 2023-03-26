import { Typography, Paper, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button, FormGroup, Checkbox, Modal } from '@mui/material';
import { Box } from '@mui/system';
import Reg from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';

const mainBox = {
    maxWidth: "400px",
    margin: "100px auto",
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMobile = (e) => {
        setMobile(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const [modalStatus, SetModalStatus] = useState(false);

    const handleModalOpen = () => {
        SetModalStatus(true);
    }
    const handleModalClose = () => {
        SetModalStatus(false);
    }

    const [gender, SetGender] = useState();

    const handleGender = (e) => {
        SetGender(e.target.value);
    }

    return (
        <>
            <form>
                <Paper style={mainBox} elevation="8">
                    <Box>
                        <Typography variant='h3' textAlign="center" color={"primary"}>Sign Up</Typography>
                    </Box>
                    <Box marginTop="40px">

                        <TextField type={"text"} value={name} label="Name" style={inputStyle} onChange={handleName}></TextField>
                        <TextField type={"email"} value={email} label="Email" style={inputStyle} onChange={handleEmail}></TextField>
                        <TextField type={"number"} value={mobile} label="Mobile" style={inputStyle} onChange={handleMobile}></TextField>

                        <FormControl style={radioStyle}>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel control={<Radio />} label='Male' value='Male' onChange={handleGender}></FormControlLabel>
                                <FormControlLabel control={<Radio />} label='Female' value='Female' onChange={handleGender}></FormControlLabel>
                            </RadioGroup>
                        </FormControl>

                        <TextField type={"password"} value={password} label="Password" style={inputStyle} onChange={handlePassword}></TextField>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label='Agree To Privacy Policy' />
                        </FormGroup>

                        <Box style={btnContStyle}>
                            <Button variant='contained' size='large' style={btnStyle} endIcon={<Reg />} onClick={handleModalOpen}>Sign Up</Button>
                            <Button size='large' style={btnStyle} endIcon={<LoginIcon />}>Switch to Login</Button>
                        </Box>
                    </Box>
                </Paper>
                <Modal open={modalStatus} onClose={handleModalClose} >

                    <Box style={ModalBoxStyle}>
                        <Typography variant='h3'>User Info</Typography>

                        <Box sx={{ textAlign: 'left', marginTop: '20px' }}>
                            <Typography variant='body1'><b>Name: </b>{name}</Typography>
                            <Typography variant='body1'><b>Email: </b>{email}</Typography>
                            <Typography variant='body1'><b>Mobile: </b>{mobile}</Typography>
                            <Typography variant='body1'><b>Gender: </b>{gender}</Typography>
                            <Typography variant='body1'><b>Password: </b>{password}</Typography>
                        </Box>
                    </Box>
                </Modal>
            </form>
        </>
    );
}

export default Signup;