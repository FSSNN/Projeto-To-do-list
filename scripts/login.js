document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication logic (replace with real authentication)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'listar-tarefas.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
