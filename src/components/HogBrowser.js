import React from 'react'
import HogList from './HogList'
import Filter from './Filter'
import hogs from '../porkers_data'

export default class HogBrowser extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      filterBy: false,
      sortBy: 'name',
      hogs: []
    }
  }

  handleCheckbox = (event) => {
    this.setState({
      filterBy: event.target.checked
    })
  }

  handleSelect = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  componentWillMount = () => {
      this.setState({
        hogs: hogs
      })
  }


    render () {
      return (
        <div>

          <div className="ui grid centered container">
          <Filter filterBy={this.state.filterBy}
          sortBy={this.state.sortBy}
          handleCheckbox={this.handleCheckbox}
          handleSelect={this.handleSelect}
          />
          <HogList hogs={this.state.hogs} filterBy={this.state.filterBy} sortBy={this.state.sortBy}/>
          </div>
        </div>
      )
    }
}
