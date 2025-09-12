document.addEventListener('DOMContentLoaded', () => {
    // Obtener la instancia del modal de registro para poder cerrarla
    const registerModalElement = document.getElementById('registerModal');
    const registerModal = new bootstrap.Modal(registerModalElement);

    const btnRegistrar = document.getElementById("btn-registrar");
    if (btnRegistrar) {
        btnRegistrar.addEventListener("click", function () {
            // Obtener los datos del formulario de registro
            let nuevoUsuario = {
                nombre: document.getElementById("registerUsername").value,
                email: document.getElementById("registerEmail").value,
                password: document.getElementById("registerPassword").value,
            };

            // Validar si los campos están llenos (opcional, pero buena práctica)
            if (!nuevoUsuario.nombre || !nuevoUsuario.email || !nuevoUsuario.password) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Cargar usuarios existentes de localStorage o inicializar un array vacío
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            
            // Agregar el nuevo usuario al array
            usuarios.push(nuevoUsuario);

            // Guardar el array actualizado en localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            
            console.log("Usuario registrado con éxito:", nuevoUsuario);

            // Limpiar los campos del formulario de registro
            document.getElementById("registerUsername").value = "";
            document.getElementById("registerEmail").value = "";
            document.getElementById("registerPassword").value = "";

            // Cerrar el modal de registro
            registerModal.hide();
        });
    }
});