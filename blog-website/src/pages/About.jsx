import React from 'react'
import { Box } from '@mui/system'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import img from '../images/Robert.jpg'

const About = () => {
    return (
        <>
            <Box className='about-page page'>
                <div className='main-bg'>
                    <div>
                        <div className='content'>
                            <h1 className='main-heading'>About Our Leadership <br /> and Beliefs</h1>
                            <p className='main-para'>Newbreak Church is all about, "Connecting <br />
                                people with God through authentic relationships <br />
                                to serve communities."</p>
                        </div>
                        <div>
                            <button className='btn' type="text">OUR LEADERSHIPS</button>
                            <button className='btn-2' type="text">OUR BELIFES</button>

                        </div>
                    </div>
                </div>
                <h1 className='section-2-heading'>Our Heart for People</h1>
                <div className='section-main'>
                    <div>
                        <p className='section-2-para'>
                            When asked what the greatest commandment was, Jesus replied,<br />
                            "Love the Lord your God with all your heart and with all your soul <br />
                            and with all your mind and with all your strength. The second is <br />
                            this: 'Love your neighbor as yourself.' There is no commandment <br />
                            greater than these" (Mark 12:29-31).
                        </p>
                    </div>
                    <div className='section-2-para2'>
                        <p className='section-2-para'>Plan a visit</p>
                        <p className='section-2-para'>Find a campus</p>
                        <p className='section-2-para'>Contect us</p>
                    </div>
                    <div className='sect-icons'>
                        <FacebookRoundedIcon className='sec-icon' color='black' fontSize='large' />
                        <InstagramIcon className='sec-icon2' color='black' fontSize='large' />
                        <YouTubeIcon className='sec-icon2' color='black' fontSize='large' />
                    </div>
                </div>
                <div className='Sec-3'>
                    <div>
                        {/* <img className='img' src={img}/> */}
                    </div>
                </div>

            </Box>
        </>
    )
}

export default About