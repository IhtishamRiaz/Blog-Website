import React from 'react';
import { Box } from '@mui/system';
import myImage from '../images/hustle.jpg';

const Policy = () => {
    return (
        <>
            <Box className='policy-page page'>
                <img className='hustle' src={myImage} alt="hustle" />
                <h1>Policy Page</h1>
                <p>
                    At our blog site, we are committed to protecting your privacy. This Privacy
                    Policy outlines the types of personal information we may collect when you
                    use our website, how we use that information, and how we protect it. By
                    using our site, you consent to this Privacy Policy.
                </p>
                <h2>What information do we collect?</h2>
                <p>
                    We may collect the following types of personal information from you when
                    you use our site:
                </p>
                <ul>
                    <li>Your name and email address, if you choose to sign up for our email list</li>
                    <li>Your IP address and browser type, as collected by our website analytics tools</li>
                    <li>Any other information you choose to provide to us through our contact forms or comments sections</li>
                </ul>
                <h2>How do we use your information?</h2>
                <p>
                    We may use the information we collect from you in the following ways:
                </p>
                <ul>
                    <li>To personalize your experience and provide you with tailored content</li>
                    <li>To improve our website based on your feedback</li>
                    <li>To send periodic emails if you choose to sign up for our email list</li>
                </ul>
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
                <h2>Do we use cookies?</h2>
                <p>
                    Yes, we use cookies to personalize your experience and provide you with
                    tailored content. You can disable cookies in your browser settings if you
                    prefer not to have them stored on your device.
                </p>
                <h2>Changes to this Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. When we do, we will
                    post the updated policy on our website and revise the "last updated" date
                    at the top of this page.
                </p>
            </Box>
        </>
    )
}

export default Policy