import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const AdminMenu = (props) => {

    const photoUrl = sessionStorage.getItem('photoURL');

    return (
        <>
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

        </>
    )
}

export default AdminMenu;