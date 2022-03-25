var arreglo= [["Apple", "Orange", "Plum"], ["Wine", "Beer", "Water"], ["Fork", "Knife", "Spoon"]];


arreglo.push(["Pepe"]);


for (let i = 0; i < arreglo.length; i++) { 
  //console.log(`Sección ${i+1}`);
  for (let j = 0; j < arreglo[i].length; j++) {
    
    //console.log(arreglo[i][j]);
    
  }
 
}

var perro= ['Doberman', 'Perro Salchicha', 'Labrador'];

console.log("LOOP FOR IN:");
for (const key in perro) {
  if (Object.hasOwnProperty.call(perro, key)) {
    console.log(perro[key]);
    
  }
}
console.log("");
console.log("LOOP FOR OF:");

for (const iterator of perro) {
  console.log(iterator);
}




//AARAY ASOCIATIVOS

let pc= {
  nombre: "Dell inspiron",
  procesador: "Intel Core i7",
  ram:"16GB",
  espacio: "1TB"
}

