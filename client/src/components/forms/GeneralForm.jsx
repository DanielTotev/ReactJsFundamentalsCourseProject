import React, { Component } from 'react';

export default class GeneralForm extends Component {
    constructor(props) {
        super(props);
        this.state = generateState(this.props.children);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {React.Children.map(this.props.children, child => {
                    if(child.type === 'input') {
                        return <input value={this.state[child.props.name]} onChange={this.handleChange} {...child.props} />
                    }  
                })}
            </form>
        )
    }
}

let generateState = (children) => {
    let state = {};
    React.Children.forEach(children, (child) => {
        if (child.type === 'input' && child.props.name) {
            state[child.props.name] = '';
        }

    });

    return state;
}