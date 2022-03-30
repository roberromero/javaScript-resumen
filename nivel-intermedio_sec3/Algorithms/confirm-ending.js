//"endsWith()"
function confirmEnding(str, target) {

    return str.endsWith(target);
  }
  
  confirmEnding("Bastian", "n");


  function confEnding(str, target) {
      let inicio= str.length - target.length;
      return str.slice(inicio) === target;
  }