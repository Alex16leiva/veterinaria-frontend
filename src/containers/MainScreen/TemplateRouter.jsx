import React from 'react'
import { DefaultLayout } from './DefaultLayout'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Security } from '../../containers/Security'
import { Client } from '../../containers/Client'
import { ControlExample } from '../../containers/ControlExample'

export const TemplateRouter = () => {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/*" element={<DefaultLayout />} />
                <Route path="security" element={<Security />} />
                <Route path="clients" element={<Client />} />
                <Route path='control' element={<ControlExample />} />
            </Routes>
        </>
    )
}
