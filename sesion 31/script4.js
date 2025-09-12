//Juego de dados
let dado = Math.floor(Math.random() * 6) + 1;
document.getElementById("demo1").innerHTML = dado;

//Numero maximo y minimo de un array 
let numeros = [1, 45, 12, 21, 10];

//Maximo
let maximo = Math.max(...numeros);
document.getElementById("demo2").innerHTML = maximo;

//Minimo 
let minimo = Math.min(...numeros);
document.getElementById("demo3").innerHTML = minimo;

//Número aleatorio entre 10 y 20
    let aleatorio = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    document.getElementById("demo4").innerHTML = aleatorio;

//Fecha del sistema

let hoyFecha= new Date().toLocaleDateString("es-PE")

let final= new Date(2025,11,20).toLocaleDateString("es-PE")

document.getElementById("demo5").innerHTML=`hoy es: ${hoyFecha} y el final es: ${final}`

//Calculo de mi edad

let fechaNacimiento = new Date(2006,10,3)

let hoy2 = new Date()

let edad = hoy2.getFullYear() - fechaNacimiento.getFullYear()

document.getElementById("demo6").innerHTML = edad

// Obtener la fecha de hoy
    let hoy = new Date();

    // Mostrar la fecha en formato local
    document.getElementById("fecha").innerHTML = hoy.toLocaleDateString();

    // Arreglo con los días de la semana
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Obtener el día de la semana
    let dia = dias[hoy.getDay()];

    // Mostrar el día en el HTML
    document.getElementById("demo7").innerHTML = dia;