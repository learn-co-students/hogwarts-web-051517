import React from 'react';

const PigSort = ({handleSortChange}) =>

  <div>
    <select onChange={handleSortChange} defaultValue='all'>
      <option value="all">All</option>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
    <br/>
    <br/>
    <br/>
    <div></div>
  </div>



export default PigSort;
