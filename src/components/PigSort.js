import React from 'react';

const PigSort = ({handleFilterChange}) =>
  <select onChange={handleFilterChange} defaultValue='all'>
    <option value="all">All</option>
    <option value="name">Name</option>
    <option value="weight">Weight</option>
  </select>



export default PigSort;
