import React, { Component } from 'react';
import GeneralAlert from './../components/alerts/GeneralAlert';

const withError = WrappedComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errOccured: false,
            errMessgae: ''
        }
        this.catchError = this.catchError.bind(this);
        this.nullState = this.nullState.bind(this);
    }

    catchError(errorMessage) {
        console.log('did catch');
        this.setState({
            errOccured: true,
            errMessgae: errorMessage
        })
    }

    nullState() {
        this.setState({
            errOccured: false,
            errMessgae: ''
        })
    }

    render() {
        return (
            <div>
                {this.state.errOccured && <GeneralAlert color="danger" message={this.state.errMessgae} />}
                <WrappedComponent handleError={this.catchError} nullState={this.nullState} />
            </div>
        );
    }
}

export default withError;