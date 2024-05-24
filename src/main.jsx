import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { TemplateApp } from './TemplateApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux-store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <TemplateApp />
    </Provider>
  </BrowserRouter>
  ,
)
