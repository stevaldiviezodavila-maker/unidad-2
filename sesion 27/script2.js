//variables

 function determinar() {

let edad = parseInt(document.getElementById("edad").value);
let result;

if  (edad >= 18){
result = "Es mayor de edad"
} else {
    result = "Es menor de edad"
}

document.getElementById("resultado").textContent = result;
}

