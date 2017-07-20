import React from 'react'
import PigTile from './PigTile'

const PigList = ({pigs, currentSort, sortPigs, isGreased, findImage, pigImgs, showPig}) => {
  const list = sortPigs(pigs, currentSort, isGreased)

  let key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  return(
    <div className='ui grid container'>
      {list.map((pig, index) => {
        return <PigTile
          key={pig.name}
          greased={pig.greased}
          weight={pig[key]}
          name={pig.name}
          imagePath={`hog-imgs/${pig.name.toLowerCase().replace(/ /g, "_")}.jpg`}
          pig={pig}
          showPig={showPig}
        />
      })}
    </div>
  )
}


export default PigList
