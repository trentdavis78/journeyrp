import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase/firebase';
import { database } from '../firebase/firebase';

export default function Admin() {
    const [userData, setUserData] = useState({});
    const [hasAdminCreds, setHasAdminCreds] = useState(false)
    firebase.auth().onAuthStateChanged(function(user) {
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
                if(uid === userData.uid) {
                    setHasAdminCreds(true);
                }
            })
        });
      }, [userData]);
    

    return (
        <div className="container admin-container">
            <h2>Admin</h2>
            <hr />
            {hasAdminCreds && <p>You are authorized to see this</p>}
            {!hasAdminCreds && <p>You are not an authorized admin</p>}
            <p>Admin page</p>
        </div>
    )
}
