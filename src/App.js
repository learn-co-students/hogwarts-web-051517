import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogList from './components/HogList'
import Checkboxes from './components/Checkboxes'
import Sort from './components/Sort'

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state =  {
            isGreased: false,
            sortby: 'default'
        }
    }

    onChange = (event) => {
        this.setState ({
            isGreased: event.target.checked
        })
    }

    handleChange = (event) => {
        // console.log(this.state.sortby)
        this.setState({
            sortby: event.target.value
        })
          // debugger
    }

  render() {
    return (
      <div className="App">
          < Nav />
          < Sort onChange={this.handleChange}/>
          < Checkboxes onChange={this.onChange}/>
          < HogList sortby={this.state.sortby} isGreased={this.state.isGreased}/>

      </div>
    )
  }
}



export default App;
