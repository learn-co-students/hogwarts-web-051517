import React from 'react'
import Hog from './Hog'

const HogContainer = (props) => {
  return (
    <div className='HogContainer ui grid container'>
        {props.hogs.map(hog => (
          <Hog name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
        highestMedal={hog['highest medal achieved']}
        />
        ))}

    </div>
  )
}

export default HogContainer
