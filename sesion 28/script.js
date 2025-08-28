let frutas=["manzana","pera","platano",]

console.log(frutas)

//METODOS PARA AGREGAR ELEMENTOS AL ARRAY
//Agregar adelante 
frutas.unshift("zandia")


//Agregar al final
frutas.push("ciruela")

console.log("frutas")

//METODOS PARA ELIMINAR ELEMENTOS DEL ARRAY
//Eliminar el primero
frutas.shift()

//Eliminar el ultimo
frutas.pop()

console.log(frutas)

//Editar un valor del ARREGLO
frutas[1]="papaya"

console.log(frutas)

//Procesar para colocar las frutas en el div

for(let fruta of frutas){
    document.getElementById("contenido").innerHTML += fruta + "," 
}

//Procesra para colocar las frutas en la ul
for(let fruta of frutas){
    document.getElementById("canasta").innerHTML += `<li>${fruta}</li>`
}
