import { Avatar, Box, Button, IconButton, Menu, Tooltip, MenuItem, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Reg from '@mui/icons-material/HowToReg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Logo from '../images/logo.png'
import { blogs } from '../context/BlogsProvider';

const Navbar = ({ isAuthenticated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser } = useContext(blogs);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('accessToken');
        window.location.reload();
        navigate('/');
    };
    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const url = "http://localhost:8080/public/images/"
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
                        </ul>
                    </div>
                    <div className="nav-btns">
                        {
                            isAuthenticated ?
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar
                                                alt={currentUser?.firstName}
                                                src={`${url}${currentUser?.profileImage}`}
                                                sx={{ width: 50, height: 50 }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Profile</Typography>
                                        </MenuItem>

                                        {
                                            (currentUser?.role === 'admin') ?
                                                <Link to='/addPost' className='route-link'>
                                                    <MenuItem onClick={handleCloseUserMenu}>
                                                        <Typography textAlign="center">Add Post</Typography>
                                                    </MenuItem>
                                                </Link> : <></>
                                        }
                                        {
                                            (currentUser?.role === 'superAdmin') ?
                                                <>
                                                    <Link to='/user/addPost' className='route-link'>
                                                        <MenuItem onClick={handleCloseUserMenu}>
                                                            <Typography textAlign="center">Add Post</Typography>
                                                        </MenuItem>
                                                    </Link>
                                                    <Link to='/user/dashboard' className='route-link'>
                                                        <MenuItem onClick={handleCloseUserMenu}>
                                                            <Typography textAlign="center">Dashboard</Typography>
                                                        </MenuItem>
                                                    </Link>
                                                </>
                                                : <></>
                                        }
                                        <MenuItem onClick={() => { handleCloseUserMenu(); handleLogout() }}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>

                                : <Link to='/register' className='route-link'>
                                    <Button variant="outlined" endIcon={<Reg />}>Sign Up</Button>
                                </Link>
                        }
                        <MenuRoundedIcon className='menu-btn' onClick={menuToggle} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar