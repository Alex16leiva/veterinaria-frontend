import React from 'react'
import './mainContentControl.css'
import './mainContentControlWithNav.css'
import './mainContentControlWithList.css'
import { useSelector } from 'react-redux'
export const MainContentControl = ({
    // isNavCollapse,
    className,
    style,
    children,
    withNav
}) => {
    const { isCollapsed } = useSelector(state => state.controls)
    
    return (
        <div
            className={
                withNav
                    ? `${className} mainContentControl mainContentControlWith${isCollapsed ? 'Collapsed' : ''}Nav`
                    : className
            }
            style={style}
        >
            {children}
        </div>
    )
}
