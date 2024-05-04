import { Icon } from '@mui/material'
import React, { createElement } from 'react'

export const ExampleIcon = () => {

    const buildIcon = (name) => {
        const icon = Icon[name]
        console.log(icon, name);
        return <icon />
    }

  return (
    <div>ExampleIcon

        {/* <Icon>'AccessAlarmsIcon'</Icon> */}
        {/* {createElement(MuiIcons['AccessAlarmsIcon'])} */}
        
    </div>
  )
}


