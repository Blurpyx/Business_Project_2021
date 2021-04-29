window.addEventListener('load', (event) => {
    event.preventDefault();
    regForm = document.getElementById('regForm');
    
    $("#profile-photo").click(function(){
        $("#myfile").click();
      });
       const output = document.getElementById("profile-photo");
       if (window.FileList && window.File && window.FileReader) {
        document.getElementById("myfile").addEventListener("change", event => {
            output.src = '';
            status.textContent = '';
            file = event.target.files[0];
            if (!file.type) {
                status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
                return;
            }
            if (!file.type.match('image.*')) {
                status.textContent = 'Error: The selected file does not appear to be an image.'
                return;
            }
            const reader = new FileReader();
            reader.addEventListener('load', event => {
                output.src = event.target.result;
                console.log("Current selected image:" + document.getElementById("myfile").value);
                console.log("Current slecected image via file.name: " + file.name)
            });
            reader.readAsDataURL(file);
        })
      }


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