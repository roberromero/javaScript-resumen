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