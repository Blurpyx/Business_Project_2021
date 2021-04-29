var firebaseConfig = {
    apiKey: "AIzaSyCMRRBhJ6DIpDsky7v1LKqLKbR2H7IzEjc",
    authDomain: "my-agenda-app-uz-gent.firebaseapp.com",
    projectId: "my-agenda-app-uz-gent",
    storageBucket: "my-agenda-app-uz-gent.appspot.com",
    messagingSenderId: "534118084923",
    appId: "1:534118084923:web:75494ad5b84705eb43071e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

auth = firebase.auth();

// const user = auth.currentUser;

// if(user) {
//     console.log('user logged in');
//     console.log(user);
// } else {
//     console.log('user logged out');
// }

auth.onAuthStateChanged(user => {
    console.log(user);
});