import React, {Component} from 'react'

export default class Hog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showDetails: false
        }
    }

    clickHog =(event) => {
        this.setState({
            showDetails: !this.state.showDetails 
        })
    }

    hogDetails = () => {
        if (this.state.showDetails) {
            return (
                <div className='details'>
                    <p>Specialty: {this.props.hoginfo.specialty} </p>
                </div>
                )
        } else {
            return null
        }
    }

 
    render() {
        const imageName= `/hog-imgs/${this.props.hoginfo.name.toLowerCase().replace(/ /g, '_')}.jpg`
        return (
            <div className={this.props.hoginfo.name}>
                <img src={imageName}/>
                <p>name: <strong>{this.props.hoginfo.name}</strong> </p>
                <button onClick={this.clickHog} >Show/Hide Details</button>
                {this.hogDetails()}
            </div>
            )
    }

}