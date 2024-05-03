import React, { useState } from 'react'
import { MainContentControl } from '../../components/Controls'
import { ExampleAutoComplete } from './ExampleAutoComplete'
import { NavControl } from '../../components/Controls/NavControl/NavControl';
import './style.css'
import { ExampleDataGrid } from './ExampleDataGrid';

const exampleList = 'exampleList';
const exampleAutoComplete = 'exampleAutoComplete';
const exampleDataGrid = 'exampleDataGrid';

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
    }
  ]

  const handleOnTabChange = (item) => {
    setCurrentView(item.name)
  }

  return (
    <>
      
      <NavControl
        items={items}
        onTabChange={handleOnTabChange}
        activeItem={currentView}
      />

      <MainContentControl withNav className=''>
        {!currentView && <ExampleAutoComplete />}
        {currentView === exampleAutoComplete && (<ExampleAutoComplete />)}
        {currentView === exampleDataGrid && (<ExampleDataGrid />)}
      </MainContentControl>
    </>

  )
}
