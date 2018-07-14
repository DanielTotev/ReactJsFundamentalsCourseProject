import React, { Component } from 'react';
import GeneralAlert from './../components/alerts/GeneralAlert';
import gameHelper from './gameHelper';

const withFormManagement = (WrappedComponent, model, atcion) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            game: {
                title: '',
                description: '',
                thumbnail: '',
                price: 0,
                size: 0,
                trailer: '',
                date: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        gameHelper.getById(id)
            .then(game => {
                this.setState({
                    game: game
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                }, () => {
                    setTimeout(() => {
                        this.setState({error: ''});   
                    }, 2000);
                });
            });
    }

    handleChange(event) {
        let fieldName = event.target.name;
        console.log(fieldName);
        let fieldValue = event.target.value;
        let game = this.state.game;

        game[fieldName] = fieldValue;
        this.setState({
            game: game
        }, () => console.log(this.state.game));
    }

    handleSubmit(event) {
        event.preventDefault();
        if (model) {
            let message = model.validate(this.state.game);
            if (message) {
                this.setState({
                    error: message
                },  () => {
                    setTimeout(() => {
                        this.setState({error: ''});   
                    }, 2000);
                });
                return;
            }
        }

        atcion(this.state.game)
            .then(() => {
                this.props.history.push('/');
            }).catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }


    render() {
        return (
            <div>
                {this.state.error !== '' && <GeneralAlert color="danger" message={this.state.error} />}
                <WrappedComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} game={this.state.game} />
            </div>
        );
    }
};

export default withFormManagement;