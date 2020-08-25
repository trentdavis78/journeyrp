import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';
import { loginAction, logoutAction } from '../actions/authActions';

export const Login = ({ auth, startLogin, startLogout, loginAction, logoutAction }) => {

    console.log(auth);
    return (
        <div>
            {auth.isLoggedIn === 'true' ? <button onClick={() => { startLogout(); logoutAction(false) }}>Logout</button> 
                                        : <button onClick={() => { startLogin(); loginAction(true) }}>Login</button>}
        </div>
    )
};

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout()),
    loginAction: (bool) => dispatch(loginAction(bool)),
    logoutAction: (bool) => dispatch(logoutAction(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);