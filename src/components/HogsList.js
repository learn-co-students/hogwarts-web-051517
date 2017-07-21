import React from 'react'
import Hog from './Hog'

const HogsList = ({hogs}) => {

  return (
    <div className='ui cards grid container'>
      {hogs.map((hog, index) => <Hog key={index} hog={hog}/>)}
    </div>
  )
}


export default HogsList
