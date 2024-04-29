import { configureStore } from '@reduxjs/toolkit'
import { loginSlicer } from '../containers/Login/loginSlicer'
import { screenSlicer } from '../containers/MainScreen/screenSlicer'


export const store = configureStore({
    reducer: {
        logins: loginSlicer.reducer,
        screen: screenSlicer.reducer, 
    }
})
