import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CreateGame from './forms/CreateGame';
import Catalog from './appComponents/Catalog';
import Details from './appComponents/Details';
import Login from './appComponents/Login';
import Register from './appComponents/Register';
import Cart from './cart/Cart';
import AdminPanel from './admin/AdminPanel';
import EditGame from './admin/EditGame';
import DeleteGame from './admin/DeleteGame';

const Main = (props) => (
    <Switch>
        {console.log(props)}
        <Route exact path='/' render={() => {
            if(props.isLogged) {
                return <Catalog />;
            } else {
                return <Login/>;
            }
        }}/>
        <Route exact path='/games/catalog' render={() => {
            if(props.isLogged) {
                return <Catalog />;
            } else {
                return <Login/>;
            }
        }}/>
        <Route exact path='/games/create' render={() => {
            if(props.isLogged) {
                return <CreateGame />;
            } else {
                return <Login />;
            }
        }}/>
        <Route exact path='/users/login' render={() => {
            if(props.isLogged) {
                return <Catalog />
            }
            return <Login />;
        }}/>
        <Route exact path='/users/register' render={() => {
            if(props.isLogged) {
                return <Catalog />;
            }
            return <Register />
        }}/>
        <Route exact path='/cart' render={() => {
            if(props.isLogged) {
                return <Cart />;
            }
            return <Register />
        }}/>
        <Route path='/games/details/:id' component={Details}/>
        <Route path='/games/edit/:id' component={EditGame}/>
        <Route path='/games/delete/:id' component={DeleteGame}/>
        <Route path='/adminPanel' render={() => {
            if(props.isAdmin) {
                return <AdminPanel />;
            }
            return <Register />
        }}/>
    </Switch>    
);

export default Main;