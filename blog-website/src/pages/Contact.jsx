import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [contactInputs, setContactInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setContactInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInputs);
        setContactInputs({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }


    return (
        <>
            <Box className='contact-page page'>
                <header className='contact-header'>
                    <div className="my-container">
                        <h1>Contact us</h1>
                        <p>Have a question or need assistance?<br />We are here to help you with anything you need!</p>
                    </div>
                </header>
                <div className="contact-container my-container">
                    <div className="contact-form">
                        <h1>Contact us</h1>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name='name'
                                type='text'
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                className='form-fields'
                                onChange={handleChange}
                                value={contactInputs.name}
                            />
                            <TextField
                                name='email'
                                type='email'
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                className='form-fields'
                                onChange={handleChange}
                                value={contactInputs.email}
                            />
                            <TextField
                                name='subject'
                                type='text'
                                label="Subject"
                                variant="outlined"
                                fullWidth
                                className='form-fields'
                                onChange={handleChange}
                                value={contactInputs.subject}
                            />
                            <TextField
                                name='message'
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={8}
                                className='form-fields'
                                onChange={handleChange}
                                value={contactInputs.message}
                            />
                            <Button
                                variant="contained"
                                type='submit'
                                size='large'
                                className='form-fields'
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680274521076!5m2!1sen!2s" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="contact-links my-container">
                    <div className="contact-link-box">
                        <div className="contact-icon">
                            <LocationOnIcon color='primary' />
                        </div>
                        <p><strong>Address:</strong>198 West 21th Street,<br />Suite 721 New York NY 10016</p>
                    </div>
                    <div className="contact-link-box">
                        <div className="contact-icon">
                            <PhoneIcon color='primary' />
                        </div>
                        <p><strong>Phone:</strong>+123 456 789</p>
                    </div>
                    <div className="contact-link-box">
                        <div className="contact-icon">
                            <EmailIcon color='primary' />
                        </div>
                        <p><strong>Email:</strong>info@sample.com</p>
                    </div>
                    <div className="contact-link-box">
                        <div className="contact-icon">
                            <LinkedInIcon color='primary' />
                        </div>
                        <p><strong>Linkedin:</strong>https://www.linkedin.com</p>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Contact