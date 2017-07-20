import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import PigList from './components/PigList'
import PigSort from './components/PigSort'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pigs: [
        {'name': "Mudblood",
         'specialty': "Mediocre magic",
         'greased': false,
         'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
         'highest medal achieved': 'bronze'
      },
        {'name': "Porkchop",
         'specialty': "Making friends",
         'greased': true,
         'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.6,
         'highest medal achieved': 'silver'
      },
      {'name': "Cherub",
       'specialty': "truffle finder",
       'greased': false,
       'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 0.7,
       'highest medal achieved': 'gold'
    },
      {'name': "Piggy smalls",
       'specialty': "Massivity",
       'greased': true,
       'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 5.1,
       'highest medal achieved': 'platinum'
     }
    ],
      pigImgs: [],
      currentSort: null
    }


  };

  handleFilterChange = (e) => {
    e.persist()
    this.setState({
      currentSort: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < PigSort handleFilterChange={this.handleFilterChange}/>
          <PigList pigs={this.state.pigs} currentSort={this.state.currentSort}/>

      </div>
    )
  }
}

export default App;
