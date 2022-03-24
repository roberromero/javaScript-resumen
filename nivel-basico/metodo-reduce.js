const numeros= [
    "Hola", "me", "llamo", "Jaime", "Perez"
];

console.log(numeros.reduce((currentValue,previousValue) => currentValue += ` ${previousValue}`));
