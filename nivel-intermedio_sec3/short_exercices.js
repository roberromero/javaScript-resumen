//"reduce()"

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//"quotes"

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

//Método splice()

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 
  'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


  //"spread operator ..."

  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    newArr.push([...arr]); 
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  //"spread Operator"

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
  }
  
  console.log(spreadOut());

  //"indexOf" Si 'mushrooms' no se encuentra en el array devuelve -1

  function quickCheck(arr, elem) {
  
    if(arr.indexOf(elem) != -1){
      return true;
    }else{
      return false;
    }
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Accesing "nested arrays"
const filteredArray= [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]];
console.table(filteredArray);
console.log(filteredArray[0][1]);