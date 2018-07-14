import React from 'react';
import GeneralForm from '../forms/GeneralForm';
import auth from '.././../utils/auth';
import withError from './../../utils/withError';
import observer from './../../utils/observer';

const RegisterBase = (props) => {
    console.log(props);
    let register = (data) => {
        auth.register(data)
            .then(res => {
                props.nullState();
                console.log(res);
                if (res.user) {
                    localStorage.setItem('authtoken', res.authtoken);
                    observer.exec('login');
                }

                if (res.message) {
                    props.handleError(res.message);
                }
            }).catch(console.log);
    }

    return (
        <main className="col-4 offset-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center"><h1 className="display-3">Register</h1></div>
                        <br />
                        <GeneralForm submit={register}>
                            <label className="sr-only">Email</label>
                            <input name="email" className="form-control" placeholder="somebody@example.com" />

                            <label className="sr-only">Full Name</label>
                            <input name="fullName" className="form-control" placeholder="Full name" />

                            <label className="sr-only">Password</label>
                            <input name="password" type="password" className="form-control" placeholder="Password" />

                            <label className="sr-only">Repeat Password</label>
                            <input name="repeatPass" type="password" className="form-control" placeholder="Repeat password" />

                            <input type="submit" className="btn btn-outline-warning btn-lg btn-block" value="Register" />
                        </GeneralForm>
                        <br />
                    </div>
                </div>
            </div>
        </main>
    )
};

const Register = withError(RegisterBase);

export default Register;