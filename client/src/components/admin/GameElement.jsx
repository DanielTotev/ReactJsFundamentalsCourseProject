import React from 'react';
import { Link } from 'react-router-dom';

const GameElement = (props) => {
    return (
        <tr class="table-warning">
            <th scope="row">{props.index}</th>
            <td>{props.title}</td>
            <td>{props.price} GB</td>
            <td>{props.size} €</td>
            <td>
                <Link class="btn btn-warning btn-sm" to={"/games/edit/" + props._id}>Edit</Link>
                <Link class="btn btn-danger btn-sm" to={"/games/delete/" + props._id}>Delete</Link>
            </td>
        </tr>
    )
}

export default GameElement;