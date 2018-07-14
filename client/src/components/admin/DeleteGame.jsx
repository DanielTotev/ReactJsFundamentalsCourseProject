import React from 'react';
import withFromManagement from '../../utils/withFormManagement';
import gameHelper from '../../utils/gameHelper';

const DeleteBase = (props) => {
    return (
        <main className="col-4 offset-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center"><h1 className="display-3">Delete Game - {props.game.title}</h1></div>
                        <br />
                        <form onSubmit={props.handleSubmit}>
                            <div className="form-group row">
                                <label className="form-control-label">Title</label>
                                <input disabled="true" className="form-control" placeholder="Enter Game Title" pattern="[A-Z].{3,100}" value={props.game.title} />
                            </div>

                            <div className="form-group row">
                                <label className="form-control-label">Description</label>
                                <textarea disabled="true" className="form-control" placeholder="Enter Game Description" minlength="20" value={props.game.description}></textarea>
                            </div>

                            <div className="form-group row">
                                <label className="form-control-label">Thumbnail</label>
                                <input disabled="true" className="form-control" type="url" placeholder="Enter URL to Image" value={props.game.thumbnail} />
                            </div>

                            <div className="form-group row">
                                <label className="form-control-label">Price</label>
                                <div className="input-group">

                                    <input disabled="true" className="form-control" min="0" step="0.01" placeholder="Enter Price" value={props.game.price} />
                                    <span className="input-group-addon">€</span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="form-control-label">Size</label>
                                <div className="input-group">

                                    <input disabled="true" className="form-control" min="0" step="0.1" placeholder="Enter Size" value={props.game.size} />
                                    <span className="input-group-addon">GB</span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="form-control-label">YouTube Video URL</label>
                                <div className="input-group">
                                    <span className="input-group-addon">https://www.youtube.com/watch?v=</span>
                                    <input disabled="true" className="form-control" maxLength="11" value={props.game.trailer} minLength="11" />
                                </div>
                            </div>

                            <input className="btn btn-outline-danger btn-lg btn-block" type="submit" value="Delete Game" />
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default withFromManagement(DeleteBase, null, gameHelper.deleteGame);