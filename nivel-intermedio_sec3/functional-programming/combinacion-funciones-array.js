// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookName, addition) {
  let arrNuevo = bookName.slice();
  arrNuevo.push(addition);
  return arrNuevo;
}

function remove(bookName,elemento) {
    let arrNuevo= bookName.slice();
  const book_index = arrNuevo.indexOf(elemento);
  if (book_index >= 0) {

    arrNuevo.splice(book_index, 1);
    return arrNuevo;
    }
}

