import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
            console.log("Signed in from actions/auth");
            window.location.href = '/faq';
        });
    };
}


export const startLogout = () => {
    return () => {
        return  firebase.auth().signOut().then(() => {
            console.log("Signed out from actions/auth");
            window.location.href = '/';
        });
    };
}

// export const startLogout = () => {
//     firebase.auth().signOut().then(function() {
//         console.log("Signed out from actions/auth")
//       }).catch(function(error) {
//         console.log(error)
//       });
// }