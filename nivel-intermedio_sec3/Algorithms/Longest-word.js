function findLongestWordLength(str) {

let arr = str.split(' ');
let longest = ' ';

    for (let i= 0; i<arr.length; i++) {
        if(arr[i].length>longest.length){
            longest = arr[i];
        } 
    }
    str = longest;
    return str.length;
  }
  
  let total = findLongestWordLength("The quick brown fox jumped over the lazy dog");

  console.log(total);