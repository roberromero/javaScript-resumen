function frankenSplice(arr1, arr2, n) {
    const arrNuevo= [];
    if(arr2.length!=0){
            for (var i = 0; i < arr2.length; i++) {
                arrNuevo.push(arr2[i]);
            }
            for(let i= 0; i<arr1.length; i++){
            arrNuevo.splice(n,0,arr1[i]);
            n++;    
    }
    return arrNuevo;
    }else{
        for (var i = 0; i < arr1.length; i++) {
            arrNuevo.push(arr1[i]);
         }
        return arrNuevo;
        }
  }
  
  const arru= frankenSplice([1, 2, 3], [4, 5, 6], 1);

  console.log(arru);
