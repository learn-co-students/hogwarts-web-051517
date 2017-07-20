import React from 'react'
import PigTile from './PigTile'

function sortPigs(pigs, currentSort) {
  if (currentSort === 'all') {
    return pigs
  } else if (currentSort === 'name') {
    return pigs.sort(function(a,b) {
      let nameA = a.name
      let nameB = b.name
      if (nameA < nameB) {
        return -1
      }
      if (nameB < namea) {
        return 1
      }
      return 0
    })
  } else if (currentSort === 'weight') {

  }
}

const PigList = ({pigs, currentSort}) => {
  return (
  {const list = sortPigs()}
  <div className='ui grid container'>
    {list.map(pig => {
      return <PigTile name={pig.name} imagePath="/hog-imgs/cherub.png"/>
    })}
  </div>
  )

}


export default PigList
