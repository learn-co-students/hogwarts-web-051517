import React from 'react'

class SortHogs extends React.Component {

  render() {
    return (
      <select value={this.props.sort} onChange={this.props.handleSort}>
        <option value=''>Sort By</option>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
      </select>
    )
  }
}

export default SortHogs
