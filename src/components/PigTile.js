import React from 'react';
import PigModal from './PigModal'

const PigTile = ({name, imagePath, weight, greased, pig}) =>

  <div className='ui eight wide column'>
    <img src={imagePath}/>
    <h1>Name: {name}</h1>
    <p>Weight: {weight}</p>
    <p>Greased: {greased.toString()}</p>
    <PigModal pig={pig} imagePath={imagePath}/>
  </div>

  export default PigTile;
