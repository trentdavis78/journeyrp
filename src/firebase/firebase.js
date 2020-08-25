import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZv9jNlXmTj2XsYR3VVw8FEvBddOAQATQ",
    authDomain: "fir-demo-a1ab2.firebaseapp.com",
    databaseURL: "https://fir-demo-a1ab2.firebaseio.com",
    projectId: "fir-demo-a1ab2",
    storageBucket: "fir-demo-a1ab2.appspot.com",
    messagingSenderId: "632643762973",
    appId: "1:632643762973:web:24fcf70228049a834dfff4",
    measurementId: "G-3BPBJH61QC"
  };

  firebase.initializeApp(config);
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();  
  export { firebase, googleAuthProvider  };
  export const database = firebase.database();
