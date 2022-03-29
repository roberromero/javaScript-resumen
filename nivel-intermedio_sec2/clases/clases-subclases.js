class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level= level;
        this._numberOfStudents= numberOfStudents;

        
    }

    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
        if(typeof newNumberOfStudents === 'string'){
            return 'Invalid input: numberOfStudents must be set to a Number.';
        }else{
            this._numberOfStudents= newNumberOfStudents;
        }
    }


    quickFacts(){
        let phrase= `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
        return phrase;
    }

    static pickSubstituteTeacher(substituteTeachers){
        let sub= []= substituteTeachers;
        const randomNumber = math.floor(math.random()*substituteTeachers.length);
        return sub[randomNumber];
    }
}



class PrimarySchool extends School{

    constructor(name, numberOfStudents, pickupPolicy){
        super(name,'primary',numberOfStudents);
        this._pickupPolicy= pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }

} 
class MiddleSchool extends School {
    constructor(name) {
    super(name,  'middle');
    }
    }
    
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams() {
        return this._sportsTeams;
    }
    }




const estudiante= new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(estudiante.quickFacts());

School.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli');
