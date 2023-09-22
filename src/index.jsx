import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyDcF_C7HDeYqgCtx-lFCU0aTVw5ch0Eh5U",
//   authDomain: "personal-website-849e4.firebaseapp.com",
//   projectId: "personal-website-849e4",
//   storageBucket: "personal-website-849e4.appspot.com",
//   messagingSenderId: "809776374329",
//   appId: "1:809776374329:web:f732bbab50453abd6463e8",
//   measurementId: "G-BR793B9DFG"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
