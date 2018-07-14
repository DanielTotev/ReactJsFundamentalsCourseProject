import React, { Component } from 'react';
import Game from './Game';
import GeneralAlert from './../alerts/GeneralAlert';
import gameHelper from '../../utils/gameHelper';

export default class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            addedToCart: false
        }
        this.showAddMessage = this.showAddMessage.bind(this);
    }

    showAddMessage() {
        this.setState({
            addedToCart: true
        }, () => {
            setTimeout(() => {
                this.setState({addedToCart: false});
            }, 2000);
        });
    }

    componentDidMount() {
        gameHelper.getAll()
            .then(data => {
                this.setState({
                    games: data
                });
            });
    }


    render() {
        return (
            <main>
                {this.state.addedToCart && <GeneralAlert color={'success'} message={'Game added to cart'}/>}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center"><h1 className="display-3">SoftUni Store</h1></div>

                            <div className="card-group">
                                {this.state.games.map(x => {
                                    return <Game key={x._id} {...x} showAddMessage={this.showAddMessage}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}