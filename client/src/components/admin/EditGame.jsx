import React from 'react';
import gameModel from '../../models/game';
import withFormManagement from '../../utils/withFormManagement';
import gameHelper from '../../utils/gameHelper';

const EditBase = (props) => (
    <main className="col-4 offset-4 text-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center"><h1 className="display-3">Edit Game - {props.game.title}</h1></div>
                    <br />
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-group row">
                            <label className="form-control-label">Title</label>
                            <input name="title" className="form-control" placeholder="Enter Game Title" pattern="[A-Z].{3,100}" value={props.game.title}
                                onChange={props.handleChange} />
                        </div>

                        <div className="form-group row">
                            <label className="form-control-label">Description</label>
                            <textarea name="description" className="form-control" placeholder="Enter Game Description" minLength="20" value={props.game.description}
                                onChange={props.handleChange}></textarea>
                        </div>

                        <div className="form-group row">
                            <label className="form-control-label">Thumbnail</label>
                            <input name="thumbnail" className="form-control" type="url" placeholder="Enter URL to Image" value={props.game.thumbnail}
                                onChange={props.handleChange} />
                        </div>

                        <div className="form-group row">
                            <label className="form-control-label">Price</label>
                            <div className="input-group">
                                <input name="price" className="form-control" min="0" step="0.01" placeholder="Enter Price" value={props.game.price}
                                    onChange={props.handleChange} />
                                <span className="input-group-addon">€</span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="form-control-label">Size</label>
                            <div className="input-group">

                                <input name="size" className="form-control" min="0" step="0.1" placeholder="Enter Size" value={props.game.size}
                                    onChange={props.handleChange} />
                                <span className="input-group-addon">GB</span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="form-control-label">YouTube Video URL</label>
                            <div className="input-group">
                                <span className="input-group-addon">https://www.youtube.com/watch?v=</span>
                                <input name="trailer" className="form-control" value={props.game.trailer}
                                    onChange={props.handleChange} minLength="11" />
                            </div>
                        </div>

                        <input className="btn btn-outline-warning btn-lg btn-block" type="submit" value="Edit Game" />
                    </form>
                    <br />
                </div>
            </div>
        </div>
    </main>
);

export default withFormManagement(EditBase, gameModel, gameHelper.edit);