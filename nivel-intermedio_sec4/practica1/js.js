//container 1
let container1 = document.getElementById('container1');
container1.innerHTML = '<ul><li>first item</li>'+
'<li>second item</li><li>third item</li></ul>'+'<br>'+
'<span> Hola que tal </span>';

//container2
let container2 = document.getElementById('container2');
container2.textContent = "Hola que tal estás?"
container2.style.background = "pink";

//enlace
let enlaceFace = document.getElementById('face');
enlaceFace.href= "https://www.facebook.com/";
//Tipo de nodo
let res= enlaceFace.nodeType;
//imprimir por pantalla el tipo de nodo (un número)
let texto1= document.getElementById('texto1');
texto1.textContent = res;

let container3 = document.getElementById('container3');
let container4 = document.getElementById('container4');
let boton1 = document.getElementById('boton1');

boton1.addEventListener('click',  () => {
container3.style.background = "pink";
container4.style.background = "red";

});

//creamos un elemento que no existia en el DOM
const paragraph = document.getElementById('container3');
paragraph.innerHTML = "HOLA HELLO BONLLUA ALO";