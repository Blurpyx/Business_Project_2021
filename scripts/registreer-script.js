window.addEventListener('load', (event) => {
    event.preventDefault();
    regForm = document.getElementById('regForm');

    regForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if(regForm.pwd.value == regForm.cpwd.value) {

            var Email = regForm.email.value;
            var Pwd = regForm.pwd.value;
    
            var Username = regForm.first_name.value + ' ' + regForm.last_name.value;
            var Adres = regForm.adres.value;
            var Tel = regForm.homephone.value;
            var Gsm = regForm.gsmphone.value;

            auth.createUserWithEmailAndPassword(Email, Pwd)
                .then(cred => {
                    return db.collection('users').doc(cred.user.uid).set({
                        username: Username,
                        adres: Adres,
                        tel: Tel,
                        gsm: Gsm
                    });
                    console.log(cred.user);
                })
                .then(() => {
                    window.location.href = '../pages/menu.html';
                });

            regForm.reset();
        } else {
            console.log('Passwords do not match!');
        }
    });
});