import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { firebase } from './firebase/firebase';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
);


firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if(user) {
      console.log('Log in');
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('uid', user.uid);
      sessionStorage.setItem('photoURL', user.photoURL);

    } else {
      console.log('Log out');
      sessionStorage.setItem('isLoggedIn', false);
      sessionStorage.setItem('uid', '');
      sessionStorage.setItem('photoURL', '');
    }
  })