import React from 'react'
import SingleHog from './SingleHog'


const HogList = (props) => {

  const pigs = props.pigs.map(hog => {
      return (
        <SingleHog
          hog={hog}
        />
      )
   })

  return (
    <div>{pigs}</div>
  )
}

export default HogList
// <SingleHog singlehog={pigs} toggle={props.toggle} handleToggle={props.handleToggle}/>
