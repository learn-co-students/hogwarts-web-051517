import React from 'react'

class Hog extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  isClicked = () => {
    const img = this.props.name.toLowerCase().split(' ').join('_')
    const baseURL = '/hog-imgs/'
    const fullURL = baseURL + img + '.jpg'
    if (this.state.clicked === true) {
      return (
        <div className="ui eight wide column" onClick={this.handleClick}>
        <div className="ui card">
          <div className="image">
            <img src={fullURL}/>
            </div>
          <div className="content">
            <a className="header">{this.props.name}</a>
            <div className="description">
                <p>Specialty: {this.props.specialty}</p>
                <p>Greased: {this.props.greased.toString()}</p>
                <p>Weight (relative to fridges): {this.props.weight}</p>
                <p>Highest Medal: {this.props.highestMedal}</p>
            </div>
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="ui eight wide column" onClick={this.handleClick}>
        <div className="ui card">
          <div className="image">
            <img src={fullURL}/>
            </div>
          <div className="content">
            <a className="header">{this.props.name}</a>
          </div>
        </div>
      </div>
      )
    }
  }


  render() {
    return this.isClicked()
  }
}


export default Hog
