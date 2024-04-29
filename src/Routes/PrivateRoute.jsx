import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { logged } = useSelector(state => state.logins);
    const { pathname, search } = useLocation();

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    return (logged)
        ? children
        : <Navigate to="/login" />
}
