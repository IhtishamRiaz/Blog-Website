import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddIcon from '@mui/icons-material/Add';
import img from '../images/Robert.jpg'
import card1 from '../images/card-1.jpg'
import card2 from '../images/card-2.jpg'
import card3 from '../images/card-3.jpg'
import card4 from '../images/card-4.jpg'
import card5 from '../images/card-5.jpg'




const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Box className='about-page page'>
                <div className='main-bg my-container'>
                    <div className='my-container'>
                        <div className='content'>
                            <h1 className='main-heading'>About Our Leadership <br /> and Beliefs</h1>
                            <p className='main-para'>Newbreak Church is all about, "Connecting <br />
                                people with God through authentic relationships <br />
                                to serve communities."</p>
                        </div>
                        <div className='main-btns'>
                            <button className='btn' type="text">OUR LEADERSHIPS</button>
                            <button className='btn-2' type="text">OUR BELIFES</button>
                        </div>
                    </div>
                </div>
                <div className="my-container">

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
                            <iframe src="https://www.youtube.com/embed/0h3FaS4E-7U" title="YouTube 
                  video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- 
                   media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='sec-3-main'>
                    <div className="my-container">
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
                </div>

                <div className='sec-4-container my-container'>
                    <div className='card'>
                        <img className='card-1' src={card1} alt="" />
                        <h2 className='card-1-head'>Mike Quinn</h2>
                        <p className='card-1-head'>Legacy Pastor</p>
                    </div>

                    <div className='card'>
                        <img className='card-1' src={card2} alt="" />
                        <h2 className='card-1-head'>JoAnn Johnson</h2>
                        <p className='card-1-head'>Executive Pastor Of Ministry</p>
                    </div>

                    <div className='card'>
                        <img className='card-1' src={card3} alt="" />
                        <h2 className='card-1-head'>Lisa Wachs</h2>
                        <p className='card-1-head'>Exceutive Director Of Communications</p>
                    </div>
                    <div className='card'>
                        <img className='card-1' src={card4} alt="" />
                        <h2 className='card-1-head'>Jared Johnson</h2>
                        <p className='card-1-head'>Scripps Ranch Campous Pastor</p>
                    </div>
                    <div className='card'>
                        <img className='card-1' src={card5} alt="" />
                        <h2 className='card-1-head'>Markus Witherspoon</h2>
                        <p className='card-1-head'>Tierrasanta Pastor</p>
                    </div>
                </div>

                <div className='Sec-5'>
                    <div className="my-container">

                        <h2 className='sec-5-head'>These Core Beliefs are intended to be the basis of fellowship.</h2>
                        <p className='sec-5-paragraph'>
                            There will always be peripheral doctrines upon which committed followers of Christ disagree, but the core beliefs are non-negotiable. WE BELIEVE:The <br />
                            Bible is the inspired Word of God. There is one true God. Jesus Christ is the Son of God. All men are sinners and are in need of a Savior, Jesus Christ. <br />
                            Salvation is through faith in Christ alone, and is given by God's grace. The Holy Spirit is given to all believers.
                        </p>
                        <div className='main-container-5'>
                            <div className='input-main'>
                                <div className='inputfield'>
                                    <div className='inputfield-2'>
                                        <AddIcon />
                                        <p className='inputfield-para'>The Bible</p>
                                    </div>
                                </div>
                                <div className='inputfield'>
                                    <div className='inputfield-2'>
                                        <AddIcon />
                                        <p className='inputfield-para'>God</p>
                                    </div>
                                </div>
                                <div className='inputfield'>
                                    <div className='inputfield-2'>
                                        <AddIcon />
                                        <p className='inputfield-para'>Jesus</p>
                                    </div>
                                </div>
                                <div className='inputfield'>
                                    <div className='inputfield-2'>
                                        <AddIcon />
                                        <p className='inputfield-para'>Salvation</p>
                                    </div>
                                </div>
                                <div className='inputfield'>
                                    <div className='inputfield-2'>
                                        <AddIcon />
                                        <p className='inputfield-para'>The Holy Spirit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sec-6 my-container'>
                            <div>
                                <h2 className='sec-6-heading'>Subscribe to Weekly All-Church Updates</h2>
                                <p>Newbreak Church partners with you and your family. Every week we send out an email providing <br />
                                    helpful links to the week's content, guides for kids and students so they can follow along at home, <br />
                                    as well as updated news and information that are important to Newbreak Church as a whole and <br />
                                    specific to our campuses across San Diego County.</p>
                            </div>
                            <div className='sec-6-contact'>
                                <input className='sec-6-input' type="text" placeholder='Name' /> <br />
                                <input className='sec-6-input' type="text" placeholder='Email-Address' /> <br />
                                <button className='sec-6-btn' type='submit'>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Box>
        </>
    )
}

export default About