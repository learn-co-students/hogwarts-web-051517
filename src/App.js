import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogsList from './components/HogsList'
import hogs from './porkers_data'

class App extends Component {

  state = {
    hogs,
    filter: ''
  }

    resetHogs = () => {
        this.setState({
            hogs
        })
    }

  applyGrease = () => {
    this.setState({
      hogs:this.state.hogs.filter(hog => hog.greased === true),

    })
  }

  handleCheck = (e) => {
  if(e.target.checked){
        this.applyGrease()}
        else { this.resetHogs()
    }
  }

    // componentDidUpdate = (props, prevState) => {
    //     const isSame = this.state.hogs.every((e,i) => e.name === prevState.hogs[i].name)
    //     console.log(isSame)
    //     if (this.state.greasedHogs) {
    //             this.applyGrease()
    //     }
    // }

  handleSelect = (event) => {
      this.setState({
          filter: event.target.value
      })
      if(event.target.value === 'name'){
        this.sortNames()
      } else {
        this.sortWeight()
      }
  }

  sortNames = () => {
      this.state.hogs.sort(function (a,b) {
          if(a.name < b.name) return -1
          if(a.name > b.name) return 1
          return 0
      })
  }

    sortWeight = () => {
        this.state.hogs.sort(function (a,b) {
            if(a.weight < b.weight) return -1
            if(a.weight > b.weight) return 1
            return 0
        })
    }



  render() {
    return (
      <div className="App">

        < Nav />

        <div className="ui container">
            <label name="label">Greasy Pig? </label>
            <input type="checkbox"
                   onClick={this.handleCheck}
                   value="Is Greasy" />

            <label>Sort By </label>
            <select name="type" id="type" value={this.state.filter} onChange={this.handleSelect}>
                <option value=""></option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>

        </div>


        <br/>
        <br/>
        <br/>


        < HogsList hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
