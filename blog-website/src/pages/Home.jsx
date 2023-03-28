import React from 'react';
import { Box } from '@mui/material';
import Blogs from '../components/Blogs';

const Home = () => {
    return (
        <>
            <Box className='home-page'>
                <div className="header">
                    <div className="my-container">
                        <h1>Hello, Welcome to <span>Discovry Blogs</span></h1>
                    </div>

                </div>
            </Box>
            <section className='blogs-section'>
                <div className="my-container">
                    <div className="title-text">
                        <h1>Read Our Blogs Here</h1>
                        <Blogs />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;