//SWITCH/CASE

let numDay = 1
numDay

/* Averiguar el dia de la semana, sabiendo que 
1 -> lunes
2 -> martes
3 -> miercoles
4 -> jueves 
5 -> viernes
otro -> fin de semana*/


switch (numDay) {
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3:
        console.log("Miércoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5:
        console.log("Viernes")
        break
    default:
        console.log("Fin de semana")
        break
}


/* En una maquina expendedora de bebidas se tienen opciones :
A ->cocoa
B ->pan
C ->galleta
D ->cafe
*/

let apcion = "A" 

switch (opcion) {
    case "A":
        console.log("cocoa")
        break
    case "B":
        console.log("pan")
        break
    case "C":
        console.log("galleta")
        break
    case "D":
        console.log("cafe")
        break
}


/*Determinar que es:
caso 1: niño es menor a 12
caso 2: adolescentes  entre 12 y 18 años
caso 3: adulto entre 18 y 60 años 
caso 4: adulto mayor de 60 años
*/

let edad = 25

switch (true){
    case (edad >= 12):
        console.log("niño")
        break
    case (edad >= 12 && edad > 18):
        console.log("adolescente")
        break
    case (edad >= 18 && edad > 60):
        console.log("adulto")
        break
        default:
            console.log("adulto mayor")
}

