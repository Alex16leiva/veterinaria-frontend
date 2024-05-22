import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../containers/Login/loginSlicer';
import { unRegisterScreen } from '../screenSlicer';

import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const NavBar = () => {
    const { user } = useSelector(state => state.logins);
    const { screen } = useSelector(state => state.screen);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUnRegisterScreen = () => {
        navigate('/')
        dispatch(unRegisterScreen());
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('login')
    };


    return (
        <AppBar position="static">
            <Toolbar>
                <PetsIcon sx={{ mr: 1 }} onClick={handleUnRegisterScreen} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleUnRegisterScreen}>
                    Mi App  {screen && `- ${screen}`}
                </Typography>
                {user && (
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <Avatar sx={{ bgcolor: 'blue', mr: 1 }}>
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography variant="body1" sx={{ mr: 1 }}>
                            {user}
                        </Typography>
                        <Button color="inherit" onClick={handleLogout} startIcon={<ExitToAppIcon />}>Logout</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};