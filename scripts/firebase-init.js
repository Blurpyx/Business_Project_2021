window.addEventListener('load', (event) => {
    // const firebase = require("firebase");
    // // Required for side-effects
    // require("firebase/firestore");

    // Your web app's Firebase configuration
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
    firebase.firestore().enablePersistence()
        .catch((err) => {
            if (err.code == 'failed-precondition') {
                // Multiple tabs open, persistence can only be enabled
                // in one tab at a a time.
                // ...
            } else if (err.code == 'unimplemented') {
                // The current browser does not support all of the
                // features required to enable persistence
                // ...
            }
        });
    // Subsequent queries will use persistence, if it was enabled successfully

    var db = firebase.firestore();
});