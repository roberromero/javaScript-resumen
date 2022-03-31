function Bird(name, specie) {
    this.name = name;
    this.specie = specie;  //own property
  }
  
  Bird.prototype.numLegs = 2; // prototype property
  
  let duck = new Bird("Donald", "ans");

let ownProps = [];
let prototypeProps = [];


//Almacena las propiedades propias de la instancia
//y tmb las propias del prototipo
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {

    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);


//para saber sobre que constructor esta creada una instacia

function Dog(name) {
  this.name = name;
}
let perro1 = new Dog("Rufo");
let perro= "";
function comprobarConstructor(instancia) {
  if(instancia.constructor === Dog){
  return "Efectivamente es instancia del prototivo objeto Dog";
}else{
  return "No es una instancia de perro";
}
}
console.log(comprobarConstructor(perro));
