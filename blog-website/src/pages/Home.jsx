import React from 'react'
import { Box } from '@mui/material'

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
                        <div className="blogs-container">
                            <div className="blog-box">
                                <div className="blog-pic">
                                    <img src="https://random.imagecdn.app/200/200" alt="" />
                                    <h3>Blog Title</h3>
                                    <p>Blog Link</p>
                                </div>
                            </div>
                            <div className="blog-box">
                                <div className="blog-pic">
                                    <img src="https://random.imagecdn.app/200/200" alt="" />
                                    <h3>Blog Title</h3>
                                    <p>Blog Link</p>
                                </div>
                            </div>
                            <div className="blog-box">
                                <div className="blog-pic">
                                    <img src="https://random.imagecdn.app/200/200" alt="" />
                                    <h3>Blog Title</h3>
                                    <p>Blog Link</p>
                                </div>
                            </div>
                            <div className="blog-box">
                                <div className="blog-pic">
                                    <img src="https://random.imagecdn.app/200/200" alt="" />
                                    <h3>Blog Title</h3>
                                    <p>Blog Link</p>
                                </div>
                            </div>
                            <div className="blog-box">
                                <div className="blog-pic">
                                    <img src="https://random.imagecdn.app/200/200" alt="" />
                                    <h3>Blog Title</h3>
                                    <p>Blog Link</p>
                                </div>
                            </div>
                            <div className="blog-box">
                                <div className="blog-pic">
                                    <img src="https://random.imagecdn.app/200/200" alt="" />
                                    <h3>Blog Title</h3>
                                    <p>Blog Link</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home