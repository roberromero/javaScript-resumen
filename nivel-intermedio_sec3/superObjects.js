let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  //Borrar KEYS
  delete foods.apples;

  function checkInventory(scannedItem) {
    
    let total= foods[scannedItem];
    if(total <= 0){
      return "Este producto está agotado";
    }else{
      return total;
    }
  }
  
  console.log(checkInventory("apples"));