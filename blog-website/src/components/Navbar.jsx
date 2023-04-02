import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Reg from '@mui/icons-material/HowToReg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <nav>
                <div className="my-container">
                    <div>
                        <Link to='/' className="nav-logo">Discovery Blogs</Link>
                    </div>
                    <div className={isMenuOpen ? 'nav-container-mobile' : 'nav-links-container'}>
                        <ul>
                            <li onClick={menuToggle}><Link to='/' className='nav-link'>Home</Link></li>
                            <li onClick={menuToggle}><Link to='/about' className='nav-link'>About</Link></li>
                            <li onClick={menuToggle}><Link to='/policy' className='nav-link'>Policy</Link></li>
                            <li onClick={menuToggle}><Link to='/contact' className='nav-link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="nav-btns">
                        {
                            isLogin ? <Avatar sx={{ width: 46, height: 46 }} src="/broken-image.jpg" /> : <Link to='/register' className='route-link'><Button variant="outlined" endIcon={<Reg />}>Sign Up</Button></Link>
                        }
                        <MenuRoundedIcon className='menu-btn' onClick={menuToggle} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar