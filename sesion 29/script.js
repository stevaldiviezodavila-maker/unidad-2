//Objetos
let usuario={
    nombre : "Maria",
    edad : 12,
    sexo : "femenino",
    estudios : {
        primaria: "jsc",
        secundaria: "jsc",
    }
}

console.log(usuario)

//Llamar a una clave del objeto 
 console.log(usuario.nombre)

 //Cambiar el valor de la clave de un objeto

 usuario.nombre="Juana"
    console.log(usuario.nombre)

    //Valores del formulario 
    function enviar (){
         let formulario = document.getElementById("usuario")

    usuario.nombre = formulario.nombre.value 
     usuario.edad = formulario.edad.value 
     usuario.sexo= formulario.sexo.value

     console.log(usuario)
 

  //Mostrar los valores en el html
  
  let lista = document.getElementById("datos");
  lista.innerHTML=
  
       `<li><b>Nombre:</b> ${usuario.nombre}</li>
        <li><b>Edad:</b> ${usuario.edad}</li>
        <li><b>Sexo:</b> ${usuario.sexo}</li>`;
  
 }


 //Mostrar heroes por consola 
 console.log(heroes)
 console.log(heroes.squadName)
 console.log(heroes.members[0])
 console.log(heroes.members[0].powers)

 //cargar json
 async function cargarjson(){

 const answer = await fetch("usuario.json")
//convertir a objeto
 const datos = await answer.json()

 console.Log(datos.nombre)
 }
 cargarjson()