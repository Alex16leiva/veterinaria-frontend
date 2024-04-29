import React from 'react'
import { CardScreen } from "./CardScreen";
import { Screens } from './Screens';
import './style.css'

export const DefaultLayout = () => {
  return (
    <div className='body'>
      <div className='card-screen'>
        {
          Screens.map((item, index) => {
            return (
              <CardScreen key={index} item={item} />
            )
          })
        }
      </div>
    </div>
  )
}
