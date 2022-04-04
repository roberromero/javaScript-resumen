// Only change code below this line
function urlSlug(title) {

   return title
    .toString()
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join('-');
  
  }
  // Only change code above this line


  
  
  console.log(urlSlug("Winter is  Coming"));