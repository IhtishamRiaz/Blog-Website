import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container my-container">
                    <div className="footer-col">
                        <h1>Links</h1>
                        <ul>
                            <li><Link to='./'>Home</Link ></li>
                            <li><Link to='./about'> About</Link ></li>
                            <li><Link to='./policy'> Policy</Link ></li>
                            <li><Link to='./contact'> Contact us</Link ></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1>Follow us</h1>
                        <ul>
                            <li><a href="https://facebook.com" target='_blank' rel="noreferrer">Facebook</a></li>
                            <li><a href="https://linkedin.com" target='_blank' rel="noreferrer">Linkedin</a></li>
                            <li><a href="https://instagram.com" target='_blank' rel="noreferrer">Instagram</a></li>
                            <li><a href="https://youtube.com" target='_blank' rel="noreferrer">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1>Contact us</h1>
                        <ul>
                            <li><a href="https://goo.gl/maps/QjL39k9PJDyN9aPP9" target='_blank' rel="noreferrer">198 West 21th Street,<br />Suite 721 New York NY 10016</a></li>
                            <li><a href='tel:+123 456 789'>+123 456 789</a></li>
                            <li><a href='mailto:info@sample.com'>info@sample.com</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer