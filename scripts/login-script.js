window.addEventListener('load', (e) => {
    e.preventDefault();

    loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const Email = loginForm.email.value;
        const Pwd = loginForm.pwd.value;

        auth.signInWithEmailAndPassword(Email, Pwd).then((cred) => {
            window.location.href = '../pages/menu.html';
        })
    });
});