import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameElement from './GameElement';
import gameHelper from '../../utils/gameHelper';

export default class AdminPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount() {
        gameHelper.getAll().then(games => {
            this.setState({
                games: games
            });
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <h2 className="m-1">All Games –&nbsp;</h2> <Link to="/games/create" className="btn btn-warning m-1" href="#"><strong>+</strong> Add Game</Link>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.games.map((x, i) => {
                                    return <GameElement index={i+1} key={x._id} {...x}/>
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </main>
        );
    }
}