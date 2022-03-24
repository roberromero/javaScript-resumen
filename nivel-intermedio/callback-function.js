//Creo una función que suma
function sumar(num1, num2) {
    return num1+num2;
}

/*
    Creo una función que toma 4 parámetros.
1. Una función
2. Dos números
3. El nombre

*/
function printar(fn, num1, num2, name) {
    
    let total= fn(num1, num2);
    return console.log(`Me llamo ${name} y esta es mi suma: ${num1} y ${num2} es igual a: ${total}`);
}
printar(sumar, 2, 5, "Roberto");