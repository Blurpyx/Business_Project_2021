// Plaats hier alle code die de Firestore DB nodig heeft

db.collection('users').onSnapshot(sh => {
    console.log('onSnapshot: ', sh);

    
});