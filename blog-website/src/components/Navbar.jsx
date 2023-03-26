import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Reg from '@mui/icons-material/HowToReg';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <nav>
                <div className="my-container">
                    <div>
                        <Link to='/' className="nav-logo">Discovery Blogs</Link>
                    </div>
                    <div className="nav-links-container">
                        <ul>
                            <li><Link to='/' className='nav-link'>Home</Link></li>
                            <li><Link to='/about' className='nav-link'>About</Link></li>
                            <li><Link to='/policy' className='nav-link'>Policy</Link></li>
                            <li><Link to='/contact' className='nav-link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="nav-btns">
                        {
                            isLogin ? <Avatar sx={{ width: 46, height: 46 }} src="/broken-image.jpg" /> : <Link to='/register' className='route-link'><Button variant="outlined" endIcon={<Reg />} size='large'>Sign Up</Button></Link>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar