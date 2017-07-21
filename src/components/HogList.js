import React, {Component} from 'react'
import Hog from './Hog'
import Hogs from '../porkers_data.js'

export default class HogList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hogs: Hogs
        }
    }

    handleClick = (event) => {
        this.setState({
            clickedHog: event.currentTarget.className 
    })
    }

    filterPigs = () => {
        return this.state.hogs.filter(hog => hog.greased === true)
    }

    allFilter = () => {
        let results = this.showResult()
        return this.showSortNames(results)
    }

    showResult = () => {
        // debugger
        if (this.props.isGreased === false) {
            return this.state.hogs
        } else if (this.props.isGreased === true) {
            // debugger
            return this.filterPigs() 
        }
    }

    showSortNames = (results) => {  
        
        const namesAZ = results.sort(function(a,b) {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        let weigth = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        const weightSort = results.sort(function(a, b) {
            return a[weigth] - b[weigth]
        })

        // if (this.props.sortby === 'default') {
        //     return this.state.hogs.map(hog => <Hog hoginfo={hog} onHandle={this.handleChange} /> )
         if (this.props.sortby === 'sortName') {
            return namesAZ.map(hog => <Hog hoginfo={hog} onHandle={this.handleChange} /> )
        } 
        // else if (this.props.sortby === 'sortWeight') {
        //     return weightSort.map(hog => <Hog hoginfo={hog} onHandle={this.handleChange} /> )
        // }
    }

    render() {
        // debugger
        return (
            <div className="hog-list">
                {this.allFilter()}
            </div>
            )
    }

}