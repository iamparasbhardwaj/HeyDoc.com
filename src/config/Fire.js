import firebase from '../firebase';
var config = {
    apiKey: "AIzaSyBQksaj1Dcpx6D7MU9N14apKsKQgZcvTms",
    authDomain: "heydoc-60cd7.firebaseapp.com",
    databaseURL: "https://heydoc-60cd7.firebaseio.com",
    projectId: "heydoc-60cd7",
    storageBucket: "heydoc-60cd7.appspot.com",
    messagingSenderId: "289328757501"
  };
  const fire = firebase.initializeApp(config);
  export default fire;