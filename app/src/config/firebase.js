import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDT8vlV4rmSkA29wHnamuDAszkx_rTzw6s",
  authDomain: "hacksc-2020-72721.firebaseapp.com",
  databaseURL: "https://hacksc-2020-72721.firebaseio.com",
  projectId: "hacksc-2020-72721",
  storageBucket: "hacksc-2020-72721.appspot.com",
  messagingSenderId: "120013387215",
  appId: "1:120013387215:web:fc65d61082c955dff94eba"
};
 firebase.initializeApp(firebaseConfig);
 // this.db = firebase.firestore();
 const db = firebase.firestore();

 export { db };

 export default firebase;