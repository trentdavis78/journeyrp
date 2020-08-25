import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase/firebase';
import { database } from '../firebase/firebase';
import { Form, Button } from 'react-bootstrap';

export default function Admin() {
    const [userData, setUserData] = useState({});
    const [hasAdminCreds, setHasAdminCreds] = useState(false);
    const [loreCode, setLoreCode] = useState('');
    const [loreTitle, setLoreTitle] = useState('');
    const [loreImageUrl, setLoreImageUrl] = useState('');
    const [loreDesc, setLoreDesc] = useState('');
    const [successfulSubmit, setSuccessfulSubmit] = useState(false);
    const [submitError, setSubmitError] = useState('');
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUserData(user);

        } else {
            window.location.href = '/';
        }
    });
    useEffect(() => {
        database.ref('admin').once('value')
            .then((snapshot) => {
                const snapArr = snapshot.val();
                snapArr.uid.map((uid) => {
                    if (uid === userData.uid) {
                        setHasAdminCreds(true);
                    }
                    return uid;
                })
            });
    }, [userData]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        database.ref('lore').push({
            code: loreCode,
            title: loreTitle,
            imgUrl: loreImageUrl,
            description: loreDesc
        }).then((val) => {
            setLoreCode('');
            setLoreTitle('');
            setLoreImageUrl('');
            setLoreDesc('');
            setSuccessfulSubmit(true);
            setTimeout(() => {
                setSuccessfulSubmit(false);
            }, 3000)
        })
        .catch((err) => setSubmitError(err.toString()))
    }
    return (
        <div className="container admin-container">
            <h2>Admin Console</h2>
            <hr />
            {hasAdminCreds &&
                <div className="adminForm-container">
                    <div className="formMessage">
                    {successfulSubmit && <p className="success">Successfully submitted!</p>}
                    {submitError && <p className="red">{submitError}</p>}
                    </div>                    
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group controlId="formCode">
                            <Form.Label><small className="red">*</small> Code</Form.Label>
                            <Form.Control required value={loreCode} onChange={(e) => { setLoreCode(e.target.value) }} type="text" placeholder="Code" />
                        </Form.Group>
                        <Form.Group controlId="formTitle">
                            <Form.Label><small className="red">*</small> Title</Form.Label>
                            <Form.Control required value={loreTitle} onChange={(e) => { setLoreTitle(e.target.value) }} type="text" placeholder="Title" />
                        </Form.Group>
                        <Form.Group controlId="forImgURL">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control value={loreImageUrl} onChange={(e) => { setLoreImageUrl(e.target.value) }} type="text" placeholder="Image URL" />
                        </Form.Group>
                        <Form.Group required controlId="formDescription">
                            <Form.Label><small className="red">*</small> Description</Form.Label>
                            <Form.Control value={loreDesc} onChange={(e) => { setLoreDesc(e.target.value) }} as="textarea" rows="10" />
                        </Form.Group>
                        <Button
                            style={{textAlign:'right'}}
                            variant="dark"
                            size="lg"
                            type="submit"
                        >
                            Add New Lore
                </Button>
                    </Form>
                </div>
            }
            {!hasAdminCreds && <p>You are not an authorized admin.</p>}
        </div>
    )
}
