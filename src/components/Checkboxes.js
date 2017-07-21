import React, { Component } from 'react'


export default class Checkboxes extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log(this.props)
        return (
            <div> 
                <input type="checkbox" name="greased" onChange={this.props.onChange}/> Greased
            </div>
            )
    }

    

}