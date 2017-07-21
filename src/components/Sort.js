import React, { Component } from 'react'


export default class Sort extends Component {
    constructor(props) {
        super(props);
        
    }

    render () {
        return (
            <select onChange={this.props.onChange}>
                <option value='default-Z'>Default</option>
                <option value='sortName'>Sort by name</option>
                <option value='sortWeight'>Sort by weight</option>
            </select>
            )
    }

}