 //recibe un "string" y devuelve un "string" al revés 
 function reverseString(str) {
    let arr = str.split('').reverse();
    
    str = arr.join('');
    return console.log(str);  
}
  
reverseString("hello");
  