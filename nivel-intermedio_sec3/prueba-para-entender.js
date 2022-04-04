let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = ['a', 'b', 'c'];


//const arraFinal = array1.filter(element => !array2.includes(element));


const arraFinal = array1.filter(elemento=> array2.includes(elemento));
                                                    
console.log(arraFinal);