import React from 'react'
import 'semantic-ui-css/semantic.min.css'


export default class Filter extends React.Component {

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleFilter}>
          <label>Greased?</label>
          <input type='checkbox' id='greased' checked={this.props.filterBy} onChange={this.props.handleCheckbox}/>
          <br/>
          <label>Sort By: </label>
          <select value={this.props.sortBy} onChange={this.props.handleSelect}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </form>
      </div>

  )}

}
