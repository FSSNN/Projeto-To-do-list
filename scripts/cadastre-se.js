document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;
        
        if (password !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        
        const user = {
            username,
            email,
            password
        };
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html';
        form.reset();
    });
});
