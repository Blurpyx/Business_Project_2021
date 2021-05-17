window.addEventListener('load', (event) => {
    event.preventDefault();
    regForm = document.getElementById('regForm');
    let file = {};

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
            var Stad = regForm.stad.value;
            var ProfilePath;

            auth.createUserWithEmailAndPassword(Email, Pwd)

                .then(cred => {
                    uploadProfilePic(cred.user)
                    .then(resultResult =>
                        {
                            console.log("the result of the resolution: " + resultResult);
                            path = resultResult;
                            {
                                console.log("Start upload of data to FireBase")
                                return db.collection('users').doc(cred.user.uid).set({
                                    username: Username,
                                    adres: Adres,
                                    tel: Tel,
                                    gsm: Gsm,
                                    "stad + code": Stad,
                                    ProfilePath: path
                                    
                                })
                                .then(()=>{
                                    console.log("Data succesfully uploaded");
                                    window.location.href = '../pages/menu.html';
                                    console.log("i should sent to: window.location.href = '../pages/menu.html' ");

                                })
                            }
                            
                        })
                    .catch(error=>{
                        console.log("An error has been catched in UploadProfilePic Promise:");
                        console.log("Error:" + error);
                    })
                    
                })
  

            regForm.reset();
        } else {
            console.log('Passwords do not match!');
        }
    });
    function uploadProfilePic(user)
    {
        return new Promise((result, reject)=>{
            var userID = user.uid;
            var PictureName = userID + "_" + file.name;
            console.log("Picture name: " + PictureName + " changed to profile.jpg");
        
            var storageRef = storage.ref();
            var ProfilePicRef = storageRef.child("users/" + userID + '/profile.jpg');
        
            var uploadTask = ProfilePicRef.put(file);
        
            uploadTask.on('state_changed', (snapshot) => {
                var progress = (snapshot.bytesTransferred /snapshot.totalBytes) *100;
                console.log("Progress upload: " + progress + "%");
                
            },
            (error) =>{console.log("Er was ne error in het uploaden")},
            ()=>{
                    console.log("upload complete")
                    ProfilePicRef.getDownloadURL().then(imgUrl =>{
                        console.log("The downloaded url is: " + imgUrl)

                        user.updateProfile({
                            photoURL: imgUrl
                        })
                        .then(()=>{
                            console.log("Current profile: " + userID + "has profile pic with url: "+ user.photoURL);
                            // db.collection('users').doc(user.uid).update({
                            //     ProfilePath: user.photoURL
                            // });
                            result(user.photoURL);
                        })
                        .catch((error)=> {
                                            console.log("Error was catched, updateProfile failed\n" + error);
                                            reject(error);
                                            })
                        
                    })
                    .catch((error)=> {console.log("Error was caught, updateProfile failed");})

        })

        
        
    })
    }
});

