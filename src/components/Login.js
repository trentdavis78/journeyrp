import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';
import { loginAction, logoutAction } from '../actions/authActions';
import { FiLogIn } from "react-icons/fi";
import AdminMenu from './AdminMenu';
import { Nav } from 'react-bootstrap';
import './Login.css';

export const Login = ({ auth, startLogin, startLogout, loginAction, logoutAction }) => {

    return (
        <div>
            {auth.isLoggedIn === 'true' ? <AdminMenu startLogout={startLogout} />
                                        : <>
                                            <Nav.Link
                                                 className="d-xl-none d-lg-none login-nav-link" 
                                                 style={{color:'rgb(255,255,255,0.5)', marginLeft:'-1rem'}}
                                                 onClick={() => { startLogin(); loginAction(true) }}>Login</Nav.Link>
                                            <FiLogIn className="d-none d-sm-none d-md-none d-lg-block d-xl-block" style={{cursor:'pointer'}} onClick={() => { startLogin(); loginAction(true) }}/> 
                                        </> }
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