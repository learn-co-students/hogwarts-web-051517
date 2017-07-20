import React from 'react';

const PigTile = ({name, imagePath}) =>
  <div className='ui eight wide column'>
    <img src={imagePath}/>
    <p>Name: {name}</p>
  </div>

  export default PigTile;
