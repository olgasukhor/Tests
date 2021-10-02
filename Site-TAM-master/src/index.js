import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBgsMrhohbcU00PpJ7n4dRzal-VKZ276sk",
  authDomain: "login-4cd1e.firebaseapp.com",
  projectId: "login-4cd1e",
  storageBucket: "login-4cd1e.appspot.com",
  messagingSenderId: "588262318692",
  appId: "1:588262318692:web:cd82d2f933e1e8f801b571",
  measurementId: "G-YN00S22PQ6"
});

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);
reportWebVitals();
