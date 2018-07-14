import React, { Component } from 'react';
import cartHelper from '../../utils/cartHelper';
import CartItem from './CartItem';
// import GeneralAlert from './../alerts/GeneralAlert';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            price: 0
        };
        this.removeItem = this.removeItem.bind(this);
    }

    componentWillMount() {
        let items = cartHelper.getItems();
        this.setState({
            items: items,
            price: items.length > 0  ? items.map(x => x.price).reduce((a, b) => a + b) : 0
        });
    }

    removeItem(id) {
        let items  = this.state.items;
        items = items.filter(x => x._id !== id);
        cartHelper.removeItem(id);
        this.setState({
            items: items,
            price: items.length > 0  ? items.map(x => x.price).reduce((a, b) => a + b) : 0
        });
    }
    
    render () {
        return (
            <main>
                <div class="container">
                    {console.log(this.state.items)}
                    <div class="row">
                        <div class="col-12">
                            <div class="text-center"><h1 class="display-3">Your Cart</h1></div>
                            <br />
                            <div class="list-group">
                              {this.state.items.map(x => {
                                  return <CartItem key={x._id} {...x} removeItem={this.removeItem}/>
                              })}
                            </div>
                            <br />
                            <div class="col-8 offset-2 my-3 text-center">
                                <h1><strong>Total Price - </strong> {this.state.price} €</h1>
                            </div>
                            <div class="col-8 offset-2 my-3">
                                <form>
                                    <input class="btn btn-success btn-lg btn-block" type="submit" value="Order" />
                                </form>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </main>
        );        
    }
}

export default Cart;