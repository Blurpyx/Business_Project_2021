window.addEventListener('load', (event) => {
    event.preventDefault();
    document.getElementById('btnReg').addEventListener('click', (event) => {
        db.collection('users').add({
            naam: document.getElementById('first_name') + ' ' + document.getElementById('last_name'),
            adres: document.getElementById('straatnaam') + ' ' + document.getElementById('straatnr')
        })
        .then((docRef) => {
            docRef.id = document.getElementById('first_name') + ' ' + document.getElementById('last_name');
            console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
        });
    });
});