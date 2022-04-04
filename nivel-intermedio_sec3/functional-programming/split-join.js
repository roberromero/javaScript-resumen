function sentensify(str) {
    // Only change code below this line
  
    return str.split(/\W/).join(' ')
    // Only change code above this line
  }
  
  const res= sentensify("May-the-force-be-with-you");
  
  console.log(res);