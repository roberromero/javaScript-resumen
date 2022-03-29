const condi= (resolve, reject) => {
    if(crearNumero()>5){
        resolve("El número es mayor que 5");
    }else{
        reject("El número es igual o menor que 5");
    }
}

const crearNumero= () => {
    let num = Math.floor(Math.random()*10);
    return num;
};
const comprobar= () =>{
    return new Promise(condi);
}
console.log(comprobar());