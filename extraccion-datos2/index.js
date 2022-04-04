
//Importo un array con objetos
import { watchList } from "./secundary.js";

const arrNuevo = watchList

.filter(posicion=> posicion['imdbRating']>=8)

.map(posicion=> ({titulo: posicion['Title'], puntuacion: posicion['imdbRating']}));


console.log(arrNuevo);

