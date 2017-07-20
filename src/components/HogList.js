import React from 'react'
import HogCard from './HogCard'

export default class HogList extends React.Component {


  render(){

    let hogs = this.props.hogs


    hogs = hogs.filter(h =>{
      return this.props.filterBy === true ? h.greased : true
    }).sort((a,b)=>{
      if (this.props.sortBy === "weight") {
        return a.weight - b.weight
      } else if (this.props.sortBy === "name"){
        return a.name > b.name ? 1 : -1
      }
    })

    return(
      <div className="ui fluid centered cards">

        {hogs.map((h) => <HogCard hog={h} /> )}
      </div>
    )
  }

}
