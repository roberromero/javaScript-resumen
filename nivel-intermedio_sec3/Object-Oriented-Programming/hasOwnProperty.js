function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");

  let ownProps = [];
  
//LET IN recorre las propiedades de la instancia
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);