import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Blogs from '../components/Blogs';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Box className='home-page'>
                <div className="header">
                    <div className="my-container">
                        <h1>Hello, Welcome to<br />Discovry Blogs</h1>
                    </div>

                </div>
            </Box>
            <section className='blogs-section'>
                <div className="my-container">
                    <div className="title-text">
                        <h1>Read Our Blogs Here</h1>
                    </div>
                    <Blogs />
                </div>
            </section>
        </>
    )
}

export default Home;