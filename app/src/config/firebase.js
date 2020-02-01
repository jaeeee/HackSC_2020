import firebase from "firebase";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDT8vlV4rmSkA29wHnamuDAszkx_rTzw6s",
  authDomain: "hacksc-2020-72721.firebaseapp.com",
  databaseURL: "https://hacksc-2020-72721.firebaseio.com",
  projectId: "hacksc-2020-72721",
  storageBucket: "hacksc-2020-72721.appspot.com",
  messagingSenderId: "120013387215",
  appId: "1:120013387215:web:fc65d61082c955dff94eba"
};

// ORIGINAL PIGGY BANK DATABASE (use when storage is not full)
// var firebaseConfig = {
//   apiKey: "AIzaSyDm-9VzoXGLZji26XDghH9gx_n52rgmsHY",
//   authDomain: "piggy-bank-71144.firebaseapp.com",
//   databaseURL: "https://piggy-bank-71144.firebaseio.com",
//   projectId: "piggy-bank-71144",
//   storageBucket: "piggy-bank-71144.appspot.com",
//   messagingSenderId: "677504131374",
//   appId: "1:677504131374:web:7d80a2b5b5a3b094ed5abf"
// };

// BACKUP PIGGY DATABASE

/*var firebaseConfig = {
     apiKey: "AIzaSyBNGQ94b3sh_CA0Xud_2RKTDZcrmCSV1aQ",
     authDomain: "piggy-backup.firebaseapp.com",
     databaseURL: "https://piggy-backup.firebaseio.com",
     projectId: "piggy-backup",
     storageBucket: "piggy-backup.appspot.com",
     messagingSenderId: "314565949487",
     appId: "1:314565949487:web:e5b4472d9b1da8b367aeda",
     measurementId: "G-VDJS8GGM8B"
   };*/

//  //BACKUP PIGGY DATABASE 2

/*var firebaseConfig = {
     apiKey: "AIzaSyB-3c-A7D9wL760suIlG1rpuaoHyCMnkcA",
     authDomain: "piggybankbackup2.firebaseapp.com",
     databaseURL: "https://piggybankbackup2.firebaseio.com",
     projectId: "piggybankbackup2",
     storageBucket: "piggybankbackup2.appspot.com",
     messagingSenderId: "735217764135",
     appId: "1:735217764135:web:70c868ce0316074a32cb02",
     measurementId: "G-HZCM51BE1D"
   };*/

//BACKUP PIGGY 3

//    var firebaseConfig = {
//      apiKey: "AIzaSyBcdCvaA4MwFmUTjUcuPdsbqvCt-bNTJXw",
//      authDomain: "piggy-back3.firebaseapp.com",
//      databaseURL: "https://piggy-back3.firebaseio.com",
//      projectId: "piggy-back3",
//      storageBucket: "piggy-back3.appspot.com",
//      messagingSenderId: "875501784070",
//      appId: "1:875501784070:web:f4819338804975fc678787"
//    };

//  var firebaseConfig = {
//    apiKey: "AIzaSyBcdCvaA4MwFmUTjUcuPdsbqvCt-bNTJXw",
//    authDomain: "piggy-back3.firebaseapp.com",
//    databaseURL: "https://piggy-back3.firebaseio.com",
//    projectId: "piggy-back3",
//    storageBucket: "piggy-back3.appspot.com",
//    messagingSenderId: "875501784070",
//    appId: "1:875501784070:web:f4819338804975fc678787"
//  };

//BACKUP PIGGY 4
// var firebaseConfig = {
//   apiKey: "AIzaSyBYex1zr2ofgcb-URB1jLEELCZmhpPSIx8",
//   authDomain: "piggybankbackup4.firebaseapp.com",
//   databaseURL: "https://piggybankbackup4.firebaseio.com",
//   projectId: "piggybankbackup4",
//   storageBucket: "piggybankbackup4.appspot.com",
//   messagingSenderId: "678932646779",
//   appId: "1:678932646779:web:7fd798f64138e0db63cbde"
// };

//BACKUP PIGGY 5

/*
  var firebaseConfig = {
    apiKey: "AIzaSyD3P-Q1xAbQTYTPkD4mYnHDdEjl6dv2k1I",
    authDomain: "piggybankbackup5.firebaseapp.com",
    databaseURL: "https://piggybankbackup5.firebaseio.com",
    projectId: "piggybankbackup5",
    storageBucket: "piggybankbackup5.appspot.com",
    messagingSenderId: "364062625328",
    appId: "1:364062625328:web:1fab3cbafa6cd01d2067f5"
  };*/

// var firebaseConfig = {
//   apiKey: "AIzaSyD3P-Q1xAbQTYTPkD4mYnHDdEjl6dv2k1I",
//   authDomain: "piggybankbackup5.firebaseapp.com",
//   databaseURL: "https://piggybankbackup5.firebaseio.com",
//   projectId: "piggybankbackup5",
//   storageBucket: "piggybankbackup5.appspot.com",
//   messagingSenderId: "364062625328",
//   appId: "1:364062625328:web:1fab3cbafa6cd01d2067f5"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// this.db = firebase.firestore();
const db = firebase.firestore();

export { db };

// export default db;
// export { db };

export default firebase;
