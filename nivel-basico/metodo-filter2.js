const array= ['gato', 'perro', 'serpiente','raton', 'hormiga', 2, 4, 24];

const newArray= array.filter(x=> !(x[0]=='g' ));
newArray.push('Antonio');
console.log(newArray);