document.addEventListener('DOMContentLoaded', () => {
    // Instanciar los modales una sola vez
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

    // Obtener los botones por su ID
    const btnLoginToRegister = document.getElementById('btn-login-to-register');
    const btnRegisterToLogin = document.getElementById('btn-register-to-login');

    // Evento para cambiar del modal de login al de registro
    if (btnLoginToRegister) {
        btnLoginToRegister.addEventListener('click', () => {
            loginModal.hide();
            registerModal.show();
        });
    }

    // Evento para cambiar del modal de registro al de login
    if (btnRegisterToLogin) {
        btnRegisterToLogin.addEventListener('click', () => {
            registerModal.hide();
            loginModal.show();
        });
    }
});