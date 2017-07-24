import React from 'react'
import {Button} from 'semantic-ui-react'


const Filter = ({changeName, changeWeight, changeGreased, filteredHogs, reset, selectHog}) => {
  return (
    <div className="filter container">
      <Button onClick={changeName} color="blue" size="medium">Name</Button>
      <Button onClick={changeWeight} color="blue" size="medium">Weight</Button>
      <Button onClick={changeGreased} color="blue" size="medium">Greased?</Button>
      <Button onClick={reset} color="red" basic={true} size="medium">Reset</Button>

      <select onChange={selectHog} className="ui search dropdown">
        <option value='all'>All</option>
        {filteredHogs.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    </div>
  )
}

export default Filter
