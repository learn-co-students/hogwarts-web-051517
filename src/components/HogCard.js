import React from 'react'

export default class HogCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      more: false
    }
  }

  handleShowMoreClick = () => {
    this.setState({
      more: true
    })
  }

  handleShowLessClick = () => {
    this.setState({
      more: false
    })
  }

render() {

const {name, weight, specialty, greased, medal} = this.props.hog

  return(

    <div className="ui eight wide column card">
      <img src={`hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`}/>
      <br/>
        <h3>{name}</h3>

      <br/>
      {this.state.more === true ? moreInfo(this.props.hog) : null}

      {this.state.more === false ?
        <button className="ui button" onClick={this.handleShowMoreClick}>Show Me More Info!</button> :
        <button className="ui button" onClick={this.handleShowLessClick}>Show Me Less Info!</button>
      }
    </div>


  )
}
}

const moreInfo = ({specialty, greased, weight, medal}) => {
  return (
    <div className="content">
    <div className="description">
      <label>Specialty:  </label>
        {specialty}
      <br/>
      <label>Greased?  </label>
        {greased ? "Yes" : "Nope"}
      <br/>
      <label>Weight:  </label>
        {weight}
      <br/>
      <label>Highest Medal Achieved:  </label>
        {medal}
      <br/>
      </div>
    </div>
  )
}
