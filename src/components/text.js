import React from 'react';

export default class Text extends React.Component {
    constructor() {
        super();
        this.state = {value: 'Hello'};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return <div>
            <p> ИО: {this.state.value.toUpperCase()}</p>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} />
        </div>
    }
}