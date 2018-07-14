import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export default class GeneralAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <Alert color={this.props.color || 'info'} isOpen={this.state.visible} toggle={this.onDismiss}>
                {this.props.message || 'I am an alert and I can be dismissed!'}
          </Alert>
        );
    }
};