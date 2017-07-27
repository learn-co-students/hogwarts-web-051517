import React from 'react'

const Filter = (props) => {
  return (

    <form onChange={props.handleCheck}>
      <label>
        Greased?
      </label>
      <input type="checkbox"
      value={props.checked}/>
    </form>

  )
}

export default Filter
