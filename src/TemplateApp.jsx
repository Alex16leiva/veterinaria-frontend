import React from 'react'
import { ToastContainer } from 'react-toastify'
import { RouterApp } from "./Routes/RouterApp";
import 'react-toastify/dist/ReactToastify.css';


export const TemplateApp = () => {
    return (
        <div>
            <RouterApp />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </div>
    )
}
