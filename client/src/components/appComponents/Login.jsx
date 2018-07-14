import React from 'react';
import GeneralForm from '../forms/GeneralForm';
import auth from '.././../utils/auth';
import withError from '../../utils/withError';
import observer from '../../utils/observer';

const LoginBase = (props) => {
    console.log(props);
    let login = (data) => {
        auth.login(data)
            .then(data => {
                props.nullState();
                if (data.user) {
                    localStorage.setItem('authtoken', data.authtoken);
                    if(data.user.roles[0] === 'Admin') {
                        localStorage.setItem('isAdmin', true);
                    } else {
                        localStorage.setItem('isAdmin', false);
                    }
                    observer.exec('login');
                }

                if (data.message) {
                    props.handleError(data.message);
                }
            })
    }

    return (
        <main className="col-4 offset-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center"><h1 className="display-3">Login</h1></div>
                        <br />
                        <GeneralForm submit={login}>
                            <label className="sr-only">Email</label>
                            <input name="email" className="form-control" placeholder="somebody@example.com" />

                            <label className="sr-only">Password</label>
                            <input name="password" type="password" className="form-control" placeholder="Password" />

                            <input type="submit" className="btn btn-outline-warning btn-lg btn-block" value="Login" />
                        </GeneralForm>
                        <br />
                    </div>
                </div>
            </div>
        </main>
    )
};
const Login = withError(LoginBase);

export default Login;