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
                    <div className='about-video'>
                        <iframe width="440" height="280" src="https://www.youtube.com/embed/0h3FaS4E-7U" title="YouTube 
                  video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- 
                   media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='sec-3-main'>
                    <div className='sec-3-img'>
                        <img className='img' src={img} alt='' />
                    </div>
                    <div className='sec-3-para'>
                        <h3 className='sec-3-heading'>Robert Wachs, Lead Pastor</h3>
                        <p className='sec-3-paragraph'>Roberts Wachs is the Lead Pastor at Newbreak Church. When he is
                            isn't speaking at our <br />
                            Tierrasanta campus, he is visiting our other campuses with his wife Lisa in Scripps Ranch
                            and <br /> Ocean Beach, encouraging their pastors and empowering their people. He's been
                            at Newbreak <br /> Church for more than 20 years and is excited for the future, as we
                            connect people with God <br /> through authentic relationships to serve communities.
                        </p>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default About