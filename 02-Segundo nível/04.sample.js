let attempts = 0;

function attemptLogin(password) {
    const correctPassword = '12345';

    if (attempts >= 3) {
        return 'Tentativas de login excedidas';
    }

    if (password !== correctPassword) {
        attemptLogin++;
        return;
    }

    return 'Login efetuado com sucesso!';
}

console.log(attemptLogin('123'));
