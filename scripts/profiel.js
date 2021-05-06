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
db = firebase.firestore();

const logout = document.getElementById('log-out-button');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
        .then(() => {
            console.log('User logged out');
        });
    window.location.href = '../../index.html';
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

auth.onAuthStateChanged(user => {
    console.log(user);

    db.collection('users').doc(user.uid).onSnapshot((doc) => {
        // console.log(doc.data());
        var reset = document.createElement('div');
        reset.classList = 'row';

        var img = document.createElement('img');
        img.classList = 'page-banner';
        img.id = 'profielfoto';
        img.src = '../../images/profielfoto.png';
        img.alt = 'profielfoto';

        var p = document.createElement('p');
        p.classList = 'page-title s center';
        p.id = 'username';

        reset.innerHTML = '';
        reset.appendChild(img);
        reset.appendChild(p);

        document.querySelector('#info-block').innerHTML = '';
        document.querySelector('#info-block').appendChild(reset);


        document.querySelector('#username').innerHTML = doc.data().username;

        Object.keys(doc.data()).forEach((key) => {
            var div = document.createElement('div');
            div.classList = "row";
            div.style = "margin: 0 auto;";

            // console.log(key + ': ' + doc.data()[key]);  // "key: value"
            var spanKey = document.createElement('span');
            var spanVal = document.createElement('span');

            spanKey.classList = "text m";
            spanVal.classList = "text m right";

            if (key == "ProfilePath")
            {
                if (doc.data()[key] != "")
                {
                    img.src = doc.data()[key];
                }
            }

            if (key != "username" && key != "ProfilePath") {
                if (doc.data()[key] != "") {
                    // console.log(key + ': ' + doc.data()[key]);  // "key: value"
                    spanKey.innerHTML = key.capitalize();
                    spanVal.innerHTML = doc.data()[key].capitalize();
                }
            }
            div.appendChild(spanKey);
            div.appendChild(spanVal);
            document.querySelector('#info-block').appendChild(div);
        });
    });
});
