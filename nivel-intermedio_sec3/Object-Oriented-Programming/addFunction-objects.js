let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Pasar una función a diferentes objetos sin relación
  
  let glideMixin = function (obj){
    obj.glide = function(){
      console.log("GLIDING");
    }
  }
  
  glideMixin(bird);
  bird.glide();
  
  glideMixin(boat);
  boat.glide();