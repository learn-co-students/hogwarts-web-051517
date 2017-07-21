import React from 'react'

class SingleHog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      hide: false
    }
  }

  handleToggle = ()=>{
    this.setState({
      toggle: this.state.toggle ? false : true
    })
  }

  toggleHide = () => {
    console.log('here');
    this.setState({
      hide: this.state.hide ? false : true
    })
  }

  render(){
    console.log(this.state);
    const url = this.props.hog.name.toLowerCase().split(" ").join("_")
      return(
        <div>
        {this.state.hide ? <button onClick={this.toggleHide}>Show</button>
        :
        <ul>
            <li><h1>{this.props.hog.name}</h1></li>
          <li><img src={"/hog-imgs/" + url + ".jpg"}/></li>
          {this.state.toggle ?
            <li><button onClick={this.handleToggle}>Show More Info</button></li>
            :
          <li>
            <div>
              <button onClick={this.handleToggle}>Hide Info</button>
              <br />
              <p>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
              <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
              <p>Specialty: {this.props.hog["specialty"]}</p>
              <p>Greased: {this.props.hog.greased ? "Greasy" : "Nongreasy"}</p>
            </div>
            <button onClick={this.toggleHide}>Hide</button>
          </li>
        }
      </ul>}
    </div>
    )
  }
}

export default SingleHog
