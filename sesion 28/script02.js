//for()
//Sumar los elementos de un array

let numeros=[2, 8, 9, 21];
let total=0;

for(let i=0; i < numeros.length; i++){
    total = total + numeros[i];
}

console.log("La suma es:", total);


//Sumar todos los numeros del 0 al 1000
let sumador = 0;

for(let i=0; i <= 1000; i++){
    sumador = sumador + i;
}

console.log(sumador);

//sumar todos los numeros del 1 al mil que sean pares

let sumador2 = 0;
for (let i = 0; i <= 1000; i=i+2) {
    sumador2 += i;
}

let sumador3 = 0;
for (let i = 0; i <= 1000; i++) {
    if(i%2==0){
    sumador3 += i;
    }
}

console.log(sumador2, sumador3)

//while y do..while

//Mostrar los numeros del 1 al 10
let numero=1
do{
 console.log(numero)
 numero += 1
}while(numero<=10)

    
//sumar los numeros divisibles entre 3 del 1 al 100
