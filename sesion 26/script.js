//variable

let edadJuan= 15
let edadMaria= 19

//determinar si el usuario es mayor de edad mostrar en la consola

if(edadJuan>=18){
    console.log("Usuario es mayor de edad")
}else{
    console.log("Usuario no es mayor edad")
}

let clima = "nublado"

//si el clima es nublado usar chompa sino no usar chompa 
if(clima="nublado"){
    console.log("Si el clima es nublado usar chompa")
}else{
    console.log("Si el clima no es nublado no uisar chompa")
}
 let edad = 18
/*Si el usuario es mayor a 18 años es mayor de edad
si el usuario es mayor a 13 años es adolescente,
si el usuario es menor a 13 años es niño*/

if(edad >= 18){
    console.log("Es mayor de edad")
}else if(edad >= 13){
    console.log("Es adolescente")
}else if(edad >= 0){
    console.log("Es niño")
}else{
    console.log("Esa edad no existe")
}

let nota = 20

//Si la nota es mayor o igual a 18 colocar excelente 
//Si la nota es mayor o igual a 16 colocar muy bien 
//Si la nota es mayor o igual a 14 colocar bien
//Si la nota es mayor o igual a 11 colocar debes mejorar
//Si la nota es mayor o igual a 7 debes colocar estudiar
//Si la nota es mayor o igual a 2 debes colocar ayuda.


if (nota >= 18) {
    console.log("Excelente")
} else if (nota >= 16) {
    console.log("Muy bien")
} else if (nota >= 14) {
    console.log("Bien")
} else if (nota >= 11) {
    console.log("Debes mejorar")
} else if (nota >= 7) {
    console.log("Estudiar")
} else if (nota >= 2) {
    console.log("Ayuda")
} else {
    console.log("Nota no válida")
}


//OPERADORES LOGICOS "Y" (&&) "O" (||)

isRestaurantOp = true
isMoney = false


//ejemplo usando la &&
//Podemos comprar pizza

if(isRestaurantOp && isMoney){
    console.log("Si se puede comprar Pizza")
}else{
    console.log("No se puiede compar Pizza")
}

isSabado=false
isDomingo=false

//si es sabado puedo salir a jugar, caso contrario debo ir a estudiar 

if (isSabado || isDomingo) {
    console.log("Puedo salir a jugar")
} else {
    console.log("Debo ir a estudiar")
}