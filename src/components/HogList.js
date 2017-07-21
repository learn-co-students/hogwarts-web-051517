import React, { Component } from 'react'
import Filter from './Filter'
import HogDetails from './HogDetails'
import Hogs from '../porkers_data.js'

class HogList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: [],
      currentHogs: [],
      currentFilterType: "All"
    }
  }

  componentWillMount() {
    this.setState({
      currentHogs: Hogs
    })
  }

  changeName = () => {
    let hogNames = this.state.currentHogs.map(function(hog) {
      return hog.name
    })
    this.setState({
      filters: hogNames,
      currentFilterType: "Name"
    })
  }

  changeWeight = () => {
    this.setState({
      filters: ['0-2', '2-4', '4+'],
      currentFilterType: "Weight"
    })
  }

  changeGreased = () => {
    this.setState({
      filters: ['true', 'false'],
      currentFilterType: "Grease"
    })
  }

  reset = () => {
    this.setState({
      currentHogs: Hogs,
      currentFilterType: "All"
    })
  }

  selectName = (event) => {
    let search = this.state.currentHogs.filter((hog) => {
      return hog.name === event.target.value
    })
    return search
  }

  selectWeight = (event) => {
    let search
    if(event.target.value === '0-2'){
      search = this.state.currentHogs.filter((hog) => {
        return hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < 2
      })
    } else if (event.target.value === '2-4') {
      search = this.state.currentHogs.filter((hog) => {
        return hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > 2 && hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < 4
      })
    } else if (event.target.value === '4+') {
      search = this.state.currentHogs.filter((hog) => {
        return hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > 4
      })
    }
    return search
  }

  selectGrease = (event) => {
    let boolean = event.target.value === 'true' ? true: false
    let search = this.state.currentHogs.filter((hog) => {
      return hog.greased === boolean
    })
    return search
  }


  selectHog = (event) => {
    let search
    if(this.state.currentFilterType === 'Name'){
      search = this.selectName(event)
    } else if(this.state.currentFilterType === 'Weight'){
      search = this.selectWeight(event)
    } else if(this.state.currentFilterType === 'Grease'){
      search = this.selectGrease(event)
    }
    this.setState({
      currentHogs: search
    })
  }

  render() {
    return (
      <div className='hogList'>
        <Filter
          changeName={this.changeName}
          changeWeight={this.changeWeight}
          changeGreased={this.changeGreased}
          filteredHogs={this.state.filters}
          reset={this.reset}
          selectHog={this.selectHog}
        />
        <HogDetails
          hogs={this.state.currentHogs}
          pigify={this.pigifyImages}
         />
      </div>
    )
  }
}


export default HogList
