import React from 'react';

const CartItem = (props) => {
    return (
        <div class="list-group-item">
            <a class="btn btn-outline-danger btn-lg" href="/delete" onClick={(event) => {
                event.preventDefault();
                props.removeItem(props._id);
            }}>X</a>
            <div class="media col-3">
                <figure class="pull-left">
                    <a href="#">
                        <img class="card-image-top img-fluid img-thumbnail" src={props.thumbnail} alt="thumbnail" /></a>
                </figure>
            </div>
            <div class="col-md-6">
                <a href="#"><h4 class="list-group-item-heading"> {props.title}</h4></a>
                <p class="list-group-item-text">{props.description}</p>
            </div>
            <div class="col-md-2 text-center mr-auto">
                <h2> {props.price} € </h2>
            </div>
        </div>
    );
};

export default CartItem;