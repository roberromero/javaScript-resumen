/*
.forEach()

.filter()

.findIndex()

*/


//.forEach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(item=> console.log(`I want to eat a ${item}`));


//.map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage= animals.map(word => {
return word[0];
});

console.log(secretMessage.join(''));
//-----
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers= bigNumbers.map(function(x){
  return x/100;
})
console.log(bigNumbers);
console.log(smallNumbers);

//.filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const numPeque= randomNumbers.filter(numbers =>
numbers <250);
console.log(numPeque);
//---
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(
palabra => palabra.length > 7);

//.findIndex()

const animales = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal= animales.findIndex(animal=> animal=== 'elephant');
console.log(foundAnimal);

const startsWithS = animals.findIndex(animal =>
animal.charAt(0)=== 's');
console.log(startsWithS);

//.reduce()

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator,
currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10//Añadimos un segundo argumento
);

console.log(newSum);

// .some() .filter .every()

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
}));

const interestingWords = words.filter((word) => {return word.length > 5});

console.log(interestingWords.every((word) => {return word.length > 5}));
