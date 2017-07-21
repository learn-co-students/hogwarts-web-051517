import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'

import Hog from './porkers_data.js'
import HogList from './components/HogList.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggle:true,
      pigs: Hog,
      value: null
    }
  }

  sortByWeight = () => {
    let newPigs = [...this.state.pigs]

    newPigs.sort((a,b)=>{ return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})

    if (!this.comparePigs(newPigs)) {
      this.setState({
        pigs: newPigs
      })
    }
  }

  comparePigs(newPigs){
    var is_same = this.state.pigs.every(function(element, index) {
      return element === newPigs[index]
  })
  return is_same
  }

  sortByName = () => {
    let namePigs = Hog.map(hog => hog)
    namePigs.sort((a, b)=>{
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
    })

    if (!this.comparePigs(namePigs)) {
      this.setState({
        toggle: false,
        pigs: namePigs
      })
    }
  }

  cutTheGrease = () => {
    let greasePigs = this.state.pigs.filter(hog => {return hog.greased === false})
    this.setState({
      pigs: greasePigs,
      toggle: false
    })
  }

  unfilter = () =>{
    this.setState({
      toggle: true,
      pigs: Hog
    })
  }

  handleSubmit = (event)=>{
    this.setState({
      value: event.target.value
    })
  }

  componentDidUpdate(){
    if (this.state.value === 'Sort by Weight'){
      this.sortByWeight()
    } else if (this.state.value === 'Sort by Name'){
      this.sortByName()
    }
  }

  render() {

    return (
      <div className="App">
          < Nav />
            <select onChange={this.handleSubmit}>
              <option>Sort</option>
              <option>Sort by Weight</option>
              <option>Sort by Name</option>
            </select>
          {this.state.toggle ?
            <button onClick={this.cutTheGrease}>Get the Grease Out</button>
            :
            <button onClick={this.unfilter}>Bring Back the Grease</button>
          }
          <HogList pigs={this.state.pigs} />
      </div>
    )
  }
}

export default App;
