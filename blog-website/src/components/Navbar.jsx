import { Avatar, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reg from '@mui/icons-material/HowToReg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Logo from '../images/logo.png'
import { blogs } from '../context/BlogsProvider';

const Navbar = ({ user, isAuthenticated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser } = useContext(blogs);

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <nav>
                <div className="my-container">
                    <div>
                        <Link to='/' className="nav-logo">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className={isMenuOpen ? 'nav-container-mobile' : 'nav-links-container'}>
                        <ul>
                            <li onClick={menuToggle}><Link to='/' className='nav-link'>Home</Link></li>
                            <li onClick={menuToggle}><Link to='/about' className='nav-link'>About</Link></li>
                            <li onClick={menuToggle}><Link to='/policy' className='nav-link'>Policy</Link></li>
                            <li onClick={menuToggle}><Link to='/contact' className='nav-link'>Contact</Link></li>

                            {
                                (currentUser.userRole === 'admin') ?
                                    <>
                                        <li onClick={menuToggle}><Link to='/addPost' className='nav-link'>Add Post</Link></li>
                                    </>
                                    : <></>
                            }
                            {
                                (currentUser.userRole === 'superAdmin') ?
                                    <>
                                        <li onClick={menuToggle}><Link to='/addPost' className='nav-link'>Add Post</Link></li>
                                        <li onClick={menuToggle}><Link to='/dashboard' className='nav-link'>Dashboard</Link></li>
                                    </>
                                    : <></>
                            }
                        </ul>
                    </div>
                    <div className="nav-btns">
                        {
                            isAuthenticated ? <Avatar sx={{ width: 46, height: 46 }} src="/broken-image.jpg" /> : <Link to='/register' className='route-link'><Button variant="outlined" endIcon={<Reg />}>Sign Up</Button></Link>
                        }
                        <MenuRoundedIcon className='menu-btn' onClick={menuToggle} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar