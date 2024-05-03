import { configureStore } from '@reduxjs/toolkit'
import { loginSlicer } from '../containers/Login/loginSlicer'
import { screenSlicer } from '../containers/MainScreen/screenSlicer'
import { controlsSlicer } from '../components/Controls/ReducerControl/controlsSlicer'


export const store = configureStore({
    reducer: {
        logins: loginSlicer.reducer,
        screen: screenSlicer.reducer, 
        controls: controlsSlicer.reducer,
    }
})
