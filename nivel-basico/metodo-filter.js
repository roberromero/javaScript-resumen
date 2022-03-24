//---------Función que crea números aleatorios
const crearNumeros= () =>{
    let number= Math.floor(Math.random()*10)
    return number;

};
//Función que CREA arrays de números, recibe un parámetro "array"
const creaArrays = (arreglo) => {
    for (let index = 0; index < arreglo.length; index++) {
    arreglo[index]= crearNumeros();
}
return arreglo;
}
//Función que muestra arrays por pantalla (SE SUSTITUYE POR EL "FORECH")
const muestraArrays = arreglo =>{
   for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
} 
}


//Función que recibe dos arrays como parámetros y devuelve uno con los números enteros
const esEntero = (arrayParaFiltrar, arrayVacio) =>{arrayParaFiltrar.filter(posicionArray=>
    {   
        if((posicionArray%2)==0){
            arrayVacio.push(posicionArray);
        }
    })
    return arrayVacio;
};

//Creo array vacio de 10 posiciones
console.log("Creo y muestro array");
let numeros = new Array(10);
//Muestro el array con la función "muestraArrays" y creo un array
muestraArrays(creaArrays(numeros));

//Creo un array vacio para enviarlo a la función "esEntero" junto con el array de números
console.log("Array números pasado por la función: esEntero y mostrado");
let arrayVacio = [];
arrayVacio = esEntero(numeros, arrayVacio);
numeros = arrayVacio;
//Muestro array con "forEach"
console.log(numeros.forEach(posicion=>{console.log(posicion)}));

console.log("Utilizo la propiedad length para mostrar la longitud del array");
console.log(numeros.length);

