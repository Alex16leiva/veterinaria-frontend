import React from 'react'
import { StyledCard } from './StyledCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { registerScreen } from './screenSlicer';

export const CardScreen = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = ({securityName, title}) => {    
    dispatch(registerScreen(title));
    navigate(`/${securityName}`);  
  }

  return (
    <StyledCard backgroundColor={item.color} >
      <div className='card1' onClick={() => handleClick(item)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
          <g>
            <path
              fill={item.color}
              d={item.icon}
              width='48'
              height='48'
              margin='0,0,0,0'
              stretch='Uniform'
              renderTransformOrigin='0.5,0.5'
            />
          </g>
        </svg>
        <h3>{item.title}</h3>
      </div>
    </StyledCard>
  )
}
