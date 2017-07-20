import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import PigList from './components/PigList'
import PigSort from './components/PigSort'
import PigFilter from './components/PigFilter'
import Hogs from './porkers_data'
import PigModal from './components/PigModal'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pigs: Hogs,
      pigImgs: [],
      currentSort: 'all',
      greased: false
    }
  };

   sortPigs = (pigs, currentSort, isGreased) => {
     let filteredPigs = pigs

     if (isGreased) {
       filteredPigs = filteredPigs.filter(function(pig) {
         return pig.greased === true
       })
     }

    if (currentSort === 'all') {
      return filteredPigs
    } else if (currentSort === 'name') {
      return filteredPigs.sort(function(a,b) {
        let nameA = a.name
        let nameB = b.name
        if (nameA < nameB) {
          return -1
        }
        if (nameB < nameA) {
          return 1
        }
        return 0
      })
    } else if (currentSort === 'weight') {
      let key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        let sorted = filteredPigs.sort(function (a, b) {

        return a[key] - b[key];
      });
      debugger
      return sorted
    }
  }

  handleSortChange = (e) => {
    e.persist()
    this.setState({
      currentSort: e.target.value
    })
  }

  handleFilterChange = (e) => {
    this.setState(function(prevState,props) {
      return {greased: !prevState.greased}
    });
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < PigSort handleSortChange={this.handleSortChange}/>
          < PigFilter handleFilterChange={this.handleFilterChange} isGreased={this.state.greased}/>
          < PigList
            showPig={this.showPig}
            findImage={this.findImage}
            pigImgs={this.state.pigImgs}
            sortPigs={this.sortPigs}
            pigs={this.state.pigs}
            currentSort={this.state.currentSort}
            isGreased={this.state.greased}
          />
      </div>
    )
  }
}

export default App;
