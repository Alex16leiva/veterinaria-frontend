import React, { useState } from 'react'
import { MainContentControl } from '../../components/Controls'
import { ExampleAutoComplete } from './ExampleAutoComplete'
import { NavControl } from '../../components/Controls/NavControl/NavControl';
import './style.css'
import { ExampleDataGrid } from './ExampleDataGrid';
import { Icon } from '@mui/material';
import { ExampleIcon } from './ExampleIcon';

const exampleList = 'exampleList';
const exampleAutoComplete = 'exampleAutoComplete';
const exampleDataGrid = 'exampleDataGrid';
const exampleIcon = 'exampleIcon'

export const ControlExample = () => {

  const [currentView, setCurrentView] = useState(exampleAutoComplete)

  const items = [
    {
      name: exampleAutoComplete,
      nameShow: 'AutoComplete',
      iconName: 'Home'
    },
    {
      name: exampleList,
      nameShow: 'List',
      iconName: 'GlobalNavButton'
    },
    {
      name: exampleDataGrid,
      nameShow: 'DataGrid',
      iconName: 'Grid'
    },
    {
      name: exampleIcon,
      nameShow: 'Icons',
      iconName: 'Grid'
    }
  ]

  const handleOnTabChange = (item) => {
    setCurrentView(item.name)
  }

  return (
    <>
      <Icon>'ThreeDRotation'</Icon>
      <NavControl
        items={items}
        onTabChange={handleOnTabChange}
        activeItem={currentView}
      />

      <MainContentControl withNav className=''>
        {!currentView && <ExampleAutoComplete />}
        {currentView === exampleAutoComplete && (<ExampleAutoComplete />)}
        {currentView === exampleDataGrid && (<ExampleDataGrid />)}
        {currentView === exampleIcon && (<ExampleIcon />)}
      </MainContentControl>
    </>

  )
}
