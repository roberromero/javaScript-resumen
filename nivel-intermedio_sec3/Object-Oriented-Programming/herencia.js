function Animal() { }

Animal.prototype = {
  constructor: Animal,
  name: "paco",
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Below line added to inherited properties from Animal

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

beagle.name