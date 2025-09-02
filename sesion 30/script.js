let texto1 = document.getElementById("texto1")

texto1.classList.add("prueba")

texto1.textContent += "hola"

//coloca estilo al texto
function colocar(){
    texto1.classList.add("prueba")
}

//quita estilo al texto
function quitar(){
    texto1.classList.remove("prueba")
}

