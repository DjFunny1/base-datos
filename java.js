document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    if (username === 'Ronald' && password === '12345') {
        window.location = "base-datos.html";
} else {
    errorMessage.textContent = 'Por favor, ingrese los datos correctos.';
    }
});

/* const cuentas = [
    { username: "Ronald", password: "12345" },
    { username: "Natalia", password: "54321" },
] */
