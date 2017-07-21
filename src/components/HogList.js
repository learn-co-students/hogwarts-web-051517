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
    
    showResult = () => {
         // debugger
        if (this.props.isGreased === false) {
            return this.state.hogs
        } else if (this.props.isGreased === true) {
            // debugger
            return this.filterPigs() 
        }
    }

    

    showSort = (results) => {  
        let nameSortArray= results.slice()
        let weightSortArray = results.slice()
        let namesAZ = nameSortArray.sort(function (a,b) {
            // debugger
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })

        let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

        let weightSort = weightSortArray.sort(function(a, b) {
            return a[weight] - b[weight]
        })
        // if (this.props.sortby === 'default') {
        //     return this.state.hogs.map(hog => <Hog hoginfo={hog} onHandle={this.handleChange} /> )
        if (this.props.sortby === 'sortName') {
            return namesAZ.map(hog => <Hog hoginfo={hog} onChange={this.handleChange} /> )
        } 
        else if (this.props.sortby === 'sortWeight') {
            return weightSort.map(hog => <Hog hoginfo={hog} onChange={this.handleChange} /> )
        } else {
            return this.state.hogs.map(hog => <Hog hoginfo={hog} />)
        }
    }

    allFilters = () => {
        let results = this.showResult()
        return this.showSort(results)
    }

    render() {
        // debugger
        return (
            <div className="hog-list">
                {this.allFilters()}
            </div>
            )
    }

}