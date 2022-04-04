import { watchList } from "./secundary.js";
  

// utilizamos un loop "for" para grabar "title" y "rating"
  const ratingsFor = [];
  
  for (let i = 0; i < watchList.length; i++) {
    ratingsFor.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
  }
  
//Convierte objeto o valor de javaScript en un String
  let cadena = JSON.stringify(ratingsFor);
  console.log(`Estos dos arrays con objetos en sus posisiciones están convertidos a strings ${typeof cadena}`);
  console.log("------------------");
  console.log("Array1");
  console.log(cadena);
  

  //Copia el array
  let ratingsMap = [...watchList];

  //Utilizamos map() para obtener "title" y "año"
  ratingsMap= ratingsMap.map(posicion => ({titulo: posicion["Title"], year: posicion["Year"]}));
  console.log("Array2");
  console.log(JSON.stringify(ratingsMap));

  