import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const AdminMenu = (props) => {

    const photoUrl = sessionStorage.getItem('photoURL');

    return (
        <>
            <div className="d-xl-none d-lg-none">
                <Nav.Link
                    className="d-xl-none d-lg-none login-nav-link"
                    style={{ color: 'rgb(255,255,255,0.5)', marginLeft: '-1rem' }}
                    href="/admin">Admin</Nav.Link>
                <Nav.Link
                    className="d-xl-none d-lg-none login-nav-link"
                    style={{ color: 'rgb(255,255,255,0.5)', marginLeft: '-1rem' }}
                    onClick={() => props.startLogout()}>Logout</Nav.Link>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <DropdownButton
                    alignRight
                    title={<img
                        src={photoUrl}
                        alt=""
                        className="profilePic"
                    />}
                    id="dropdown-menu-align-right"
                >
                    <Dropdown.Item eventKey="1" href="/admin">Admin</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => props.startLogout()} eventKey="2">Logout</Dropdown.Item>
                </DropdownButton>

            </div>
        </>
    )
}

export default AdminMenu;