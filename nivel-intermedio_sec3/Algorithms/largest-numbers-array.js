function largestOfFour(arr) {
    let largNum= 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > largNum){
                largNum = arr[i][j];
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == largNum){
                largNum = arr[i];
            }
        }
    }
    
    return largNum;
  }
  
  const total= largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
