//variables

let num1=5
let num2=8

function suma (x,y){
    return x+y
}

result = suma(num1,num2)
console.log("la suma de num1 + num2 es: ", result)

//CALCULADORA
function calcular(){

let numero1=parseFloat (document.getElementById("num1").value);
let numero2=parseFloat (document.getElementById("num2").value);
let operacion=document.querySelector('input[name="operaciones"]:checked').value;
let result;

console.log(numero1, numero2, operacion)

switch(operacion){
case "+": result = numero1 + numero2;
break
case "-": result = numero1 - numero2;
break
case "*": result = numero1 * numero2;
break
case "/": result = numero1 / numero2;
break
}

document.getElementById("resultado").textContent= result;

}