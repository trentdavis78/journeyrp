import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';
import { loginAction, logoutAction } from '../actions/authActions';
import { FiLogIn } from "react-icons/fi";
import AdminMenu from './AdminMenu';

export const Login = ({ auth, startLogin, startLogout, loginAction, logoutAction }) => {
    
    return (
        <div>
            {auth.isLoggedIn === 'true' ? <AdminMenu startLogout={startLogout} />
                                        : <FiLogIn style={{cursor:'pointer'}} onClick={() => { startLogin(); loginAction(true) }}/>}
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