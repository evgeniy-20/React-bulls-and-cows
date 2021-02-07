import React from 'react';

export default class Age extends React.Component {
    constructor() {
        super();
        this.state = {value: 'Hello'};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return <div>
            <p>возраст: {this.state.value.toUpperCase()}</p>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} />
        </div>
    }
}