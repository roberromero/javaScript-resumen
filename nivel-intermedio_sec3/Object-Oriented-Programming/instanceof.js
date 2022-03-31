//EJEMPLO 1

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird;

  //EJEMPLO 2

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  const myHouse = new House(3);
  
  console.log(myHouse instanceof House);