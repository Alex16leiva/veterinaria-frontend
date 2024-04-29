import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../containers/Login/loginSlicer';
import { unRegisterScreen } from '../screenSlicer';


export const NavBar = () => {
    const { user } = useSelector(state => state.logins);
    const { screen } = useSelector(state => state.screen);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUnRegisterScreen = () => {
        dispatch(unRegisterScreen());
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('login')
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link onClick={() => handleUnRegisterScreen()}
                className="navbar-brand"
                to="/"
            >
                NameOfCompany
            </Link>

            <div className='separator' />

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink onClick={() => handleUnRegisterScreen()}
                        className={(arg) => `nav-item nav-link ${arg.isActive ? 'active' : ''}`}
                        to="/"
                    >
                        Home
                    </NavLink>
                </div>
            </div>

            <div className='separator' />

            <div className='screen-container-text'>
                {screen}
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};