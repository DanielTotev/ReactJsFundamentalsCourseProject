import React, { Component } from 'react';
import gameHelper from '../../utils/gameHelper';
import { withRouter } from "react-router-dom";

class CreateGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {
                title: '',
                description: '',
                thumbnail: '',
                price: '',
                size: '',
                trailer: '',
                releaseDate: ''
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let game = this.state.game;
        game.price = Number(game.price);
        game.size = Number(game.size);
        game.releaseDate = new Date(game.releaseDate);
        console.log(game);
        gameHelper.create(game)
            .then((m) => {
                this.props.history.push('/games/catalog');
            });
    }

    handleInput(event) {
        event.preventDefault();
        let fieldName = event.target.name;
        let value = event.target.value;
        let game = this.state.game;
        game[fieldName] = value;

        this.setState({
            game: game
        });
    }

    render() {
        return (
            <main class="col-4 offset-4 text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div className="text-center"><h1 class="display-3">Add Game</h1></div>
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group row">
                                    <label class="form-control-label">Title</label>
                                    <input class="form-control" name="title" placeholder="Enter Game Title" pattern="[A-Z].{3,100}" 
                                    onChange={this.handleInput}
                                    value={this.state.game.title}/>
                                </div>

                                <div class="form-group row">
                                    <label class="form-control-label">Description</label>
                                    <textarea class="form-control" name="description" placeholder="Enter Game Description" minLength="20"
                                     onChange={this.handleInput}
                                     value={this.state.game.description}></textarea>
                                </div>

                                <div class="form-group row">
                                    <label class="form-control-label">Thumbnail</label>
                                    <input class="form-control" name="thumbnail" type="url" placeholder="Enter URL to Image"
                                     onChange={this.handleInput}
                                     value={this.state.game.thumbnail} />
                                </div>

                                <div class="form-group row">
                                    <label class="form-control-label">Price</label>
                                    <div class="input-group">

                                        <input class="form-control" name="price" min="0" step="0.01" placeholder="Enter Price"
                                        onChange={this.handleInput}
                                        value={this.state.game.price}/>
                                        <span class="input-group-addon">€</span>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="form-control-label">Size</label>
                                    <div class="input-group">

                                        <input class="form-control" name="size" min="0" step="0.1" placeholder="Enter Size"
                                        onChange={this.handleInput}
                                        value={this.state.game.size} />
                                        <span class="input-group-addon">GB</span>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="form-control-label">YouTube Video URL</label>
                                    <div class="input-group">
                                        <span class="input-group-addon">https://www.youtube.com/watch?v=</span>
                                        <input class="form-control" name="trailer"
                                         onChange={this.handleInput}
                                         value={this.state.game.trailer} />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="form-control-label">Release Date</label>
                                    <input class="form-control" name="releaseDate" type="date" placeholder="yyyy-MM-dd"
                                    onChange={this.handleInput}
                                    value={this.state.game.releaseDate}/>
                                </div>

                                <input class="btn btn-outline-success btn-lg btn-block" id="btn-add-game" type="submit" value="Add Game" />
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default withRouter(CreateGame);