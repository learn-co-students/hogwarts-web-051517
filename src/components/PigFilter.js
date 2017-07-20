import React from 'react';

const PigFilter = ({handleFilterChange, isGreased}) => {
  return (
    <div>
      <label for="greased">Gimme Greased!</label>
      <br/>
      <input name="greased" onChange={handleFilterChange} type="checkbox" checked={isGreased}/>
      <br/>
      <br/>
    </div>
  )

}

export default PigFilter;
