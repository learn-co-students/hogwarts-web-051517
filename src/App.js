import React, {
  Component
} from 'react';
import './App.css';
import Nav from './components/Nav'
import HogContainer from './components/HogContainer'
import Hogs from './porkers_data.js'
import SortHogs from './components/SortHogs'
import Filter from './components/Filter'


class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [],
      displayHogs: [],
      sort: '',
      filtered: false
    }
  }



  handleSort = (event) => {
    if (event.target.value === 'name') {
      let sortedHogs = this.state.hogs.sort(function(a, b) {
        const NameA = a.name.toUpperCase()
        const NameB = b.name.toUpperCase()
        if (NameA < NameB) {
          return -1;
        }
        if (NameA > NameB) {
          return 1;
        }
        return 0;
      })
      this.setState({
        displayHogs: sortedHogs,
        sort: event.target.value
      })
    } else if (event.target.value === 'weight') {
      let sortedHogs = this.state.displayHogs.sort(function(a, b) {
        return b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
      this.setState({
        displayHogs: sortedHogs,
        sort: event.target.value
      })
    }
  }

  handleCheck = (event) => {
    this.setState({
      filtered: !this.state.filtered,
      displayHogs: !this.state.filtered ? this.state.displayHogs.filter(hog => hog.greased === true) : this.state.hogs
    })
  }


  componentDidMount() {
    this.setState({
      hogs: Hogs,
      displayHogs: Hogs
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <span>
            <SortHogs sort={this.state.sort} handleSort={this.handleSort}/>
            <Filter checked={this.state.filtered} handleCheck={this.handleCheck}/>
          </span>
          <div className="container">
            <HogContainer hogs={this.state.displayHogs}/>
          </div>

      </div>
    )
  }
}

export default App;
