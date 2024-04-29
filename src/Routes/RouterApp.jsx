import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../containers/Login'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { TemplateRouter } from '../containers/MainScreen/TemplateRouter'

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            <Route path='/*' element={
                <PrivateRoute>
                    <TemplateRouter />
                </PrivateRoute>
            } />
        </Routes>
    )
}
