//MODELO DE CLASE

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee{
  
    constructor(name, certifications){
        super(name);
        this._certifications= certifications;
    }
   
    addCertification(){
      
    }
}

const nurseOlynyk= new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk.name);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

//Para generar métodos estáticos creamos
/*static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }*/

