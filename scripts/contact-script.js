window.addEventListener('load', (event) => {
    var adresP = document.getElementById('adres');
    var contactP = document.getElementById('contact');

    adresP.style.textAlign = 'center';
    contactP.style.textAlign = 'center';

    var Adres;
    var Contact;

    db.collection('info').doc('UZ Gent').onSnapshot((doc) => {
        contactP.innerHTML = '';
        Adres = doc.data().adres;
        Contact = doc.data().contact;
        console.log(`${doc.id} => ${Adres.straatnaam}`);

        adresP.innerHTML = '<span style="font-size: 3rem;">' + doc.id + '</span><br>Adres: ';
        adresP.innerHTML += Adres.straatnaam + ' ' + Adres.nr + ', ' + Adres.stad;
        contactP.innerHTML += Contact.email + '<br>'
             + Contact.telOpt1 + ' / ' + Contact.telOpt2 + '<br>'
            //  + ;
    });
});