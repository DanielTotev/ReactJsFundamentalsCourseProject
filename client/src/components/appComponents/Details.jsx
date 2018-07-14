import React, { Component } from 'react';
import gameHelper from '../../utils/gameHelper';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {}
        };
        this.back = this.back.bind(this);
    }

    back(event) {
        event.preventDefault();
        this.props.history.push('/games/catalog');
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        gameHelper.getById(id)
            .then(game => {
                let endpoint = game.trailer.split('/').pop();
                endpoint = endpoint.split('=');
                if(endpoint.length > 1) {
                    endpoint = endpoint[1]
                } else {
                    endpoint = endpoint[0];
                }
                game['endpoint'] = endpoint;
                this.setState({
                    game: game
                });
            });
    }

    render() {
        return (
            <main>
                {console.log(this.state.game)}
                {console.log(this.state.game.trailer)}
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
    
                            <h1 class="display-3">{this.state.game.title}</h1>
                            <br />
    
                            <iframe title="trailer" width="560" height="315" src={`https://www.youtube.com/embed/${this.state.game.endpoint}`} frameBorder="0" allowFullScreen=""></iframe>
    
                            <br />
                            <br />
    
                            <p>{this.state.game.description}</p>
    
                            <p><strong>Price</strong> - {this.state.game.price}€</p>
                            <p><strong>Size</strong> - {this.state.game.size} GB</p>
                            <p><strong>Release Date</strong> - {this.state.game.releaseDate}</p>
    
                            <a class="btn btn-outline-primary" href="/back" onClick={this.back}>Back</a>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}