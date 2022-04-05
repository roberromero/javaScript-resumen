//INLINE EVENT HANDLERS (FUNCIÓN)
const changeText = () => {
    let texto= document.getElementById('p1');
    texto.textContent = "Texto secundario";
}

//EVENT HANDLERS PROPERTIES

const changeText2 = () => {
    let texto2= document.getElementById('p2');
    texto2.textContent= "Texto secundario con Event Handlers Properties";
}   
const boton2= document.getElementById('boton2');
boton2.onclick= changeText2;

//EVENT LISTENERS
let texto3= document.getElementById('p3');
const changeText3 = () => {
    texto3.textContent= "Texto secundario con Event Listeners";
}
const changeBackg = () => {
    texto3.style.backgroundColor = "pink";
}
const changeBackg2 = () => {
    texto3.style.backgroundColor = "blue";
}
const boton3= document.getElementById('boton3');
boton3.addEventListener('click',changeText3);
boton3.addEventListener('mouseenter', changeBackg);
boton3.addEventListener('mouseleave', changeBackg2);