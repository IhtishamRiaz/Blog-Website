import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import info from '../images/info.jpg';

const Policy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Box className='policy-page page'>
                <div className='bg'>
                    <h1>Policy</h1>
                    <p>
                        At our blog site, we are committed to protecting your privacy. This Privacy
                        Policy outlines the types of personal information we may collect when you
                        use our website, how we use that information, and how we protect it. By
                        using our site, you consent to this Privacy Policy.
                    </p>
                </div>
                <div className='sec-1'>
                    <div className='row'>
                        <div className='info-border'>
                            <img className='info' src={info} alt="books light" />
                        </div>
                        <div className='row-gap'>
                            <h2>What information do we collect?</h2>
                            <p>
                                We may collect the following types of personal information from you when
                                you use our site:<br/>
                                Your name and email address, if you choose to sign up for our email list.<br/>
                                Your IP address and browser type, as collected by our website analytics tools.<br/>
                                Any other information you choose to provide to us through our contact forms or comments sections.
                            </p>
                            <h2>How do we use your information?</h2>
                            <p>
                                We may use the information we collect from you in the following ways:<br/>
                                To send periodic emails if you choose to sign up for our email list.<br/>
                                To personalize your experience and provide you with tailored content.<br/>
                                To improve our website based on your feedback.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='sec-2'>
                    <h2>How do we protect your information?</h2>
                    <p>
                        We take data security seriously and use industry-standard measures to
                        protect your personal information. However, please note that no website or
                        electronic storage system can guarantee complete security.
                    </p>
                    <h2>Do we share your information with third parties?</h2>
                    <p>
                        We do not sell or share your personal information with third parties, except
                        as required by law or as necessary to fulfill our contractual obligations
                        with you (such as providing your email address to our email newsletter
                        service provider).
                    </p>
                </div>
                <div className='sec-3'>
                    <h2>Do we use cookies?</h2>
                    <p>
                        Yes, we use cookies to personalize your experience and provide you with
                        tailored content. You can disable cookies in your browser settings if you
                        prefer not to have them stored on your device.
                    </p>
                </div>
            </Box>
        </>
    )
}

export default Policy;