// import React from "react";
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import avatarImg from './img/avatar_photo.png';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Projects',  'Stories', 'Reports']; //"About", 


const Navbar = () => {
    const [anchorNavEl, setAnchorNavEl] = React.useState(null);
    const [anchorContactEl, setAnchorContactEl] = React.useState(null);
    const [emailCopyAlert, setEmailCopyAlert] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorNavEl(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorNavEl(null);
    };

    const handleOpenContactMenu = (event) => {
      setAnchorContactEl(event.currentTarget);
    };

    const handleCloseContactMenu = () => {
      setAnchorContactEl(null);
      setEmailCopyAlert(false);
    };

    return (
        <div className="navbar">
          <div className="navMenu">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{'color': '#CFCFCF'}}/>
            </IconButton>
            <Menu
              id="basic-menu"
              sx={{'& .MuiMenu-paper': { backgroundColor: '#CFCFCF', }}}
              anchorEl={anchorNavEl}
              open={Boolean(anchorNavEl)}
              onClose={handleCloseNavMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{'padding': '0 0 0 0'}}>
                  <Link className="navlink" to={'/' + page.toLowerCase()}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className="centerBar">
            <p className="navName">Joel Harder</p>
          </div>
            
          <div className="contactMe">
            <Tooltip title="Contact Me">
              <IconButton onClick={handleOpenContactMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatarImg} sx={{'width': '36px', 'height': '36px'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '32px', '& .MuiMenu-paper': { backgroundColor: '#CFCFCF' } }}
              id="menu-appbar"
              anchorEl={anchorContactEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorContactEl)}
              onClose={handleCloseContactMenu}
            >
              <MenuItem key="email" onClick={() => {navigator.clipboard.writeText('joelharder4@gmail.com'); setEmailCopyAlert(true);}}>
                {emailCopyAlert ? 'Copied' : 'Email'}
              </MenuItem>
              <MenuItem key="linkedin" onClick={handleCloseContactMenu} sx={{padding: '0 0 0 0'}}>
                <Link 
                  to={'https://www.linkedin.com/in/joel-harder/'} 
                  target={'_blank'} 
                  style={{textDecoration: 'none', color: 'inherit', width: '100%', height: '100%', padding: '6px 16px 6px 16px'}}
                >
                  LinkedIn
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      );
}

export default Navbar;