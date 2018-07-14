import React from 'react';
import { Link } from 'react-router-dom';
import cartHelper from '../../utils/cartHelper';

const Game = (props) => {
    let addToCart = (event) => {
        event.preventDefault();
        cartHelper.addItem(props);
        props.showAddMessage();
    }

    return (
        <div className="card col-4 thumbnail">

            <img className="card-image-top img-fluid img-thumbnail" src={props.thumbnail} alt='thumbnail' />

            <div className="card-block">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text"><strong>Price</strong> - {props.price}€</p>
                <p className="card-text"><strong>Size</strong> - {props.size} GB</p>
                <p className="card-text">{props.description.split(' ').splice(0, 50).join(' ')}</p>
            </div>

            <div className="card-footer">
                <Link name="info" className="card-button btn btn-outline-primary" to={"/games/details/" + props._id}>Info</Link>
                <a name="buy" onClick={addToCart} className="card-button btn btn-primary" href="/games/buy">Buy</a>
            </div>

        </div>
    );
};

export default Game;