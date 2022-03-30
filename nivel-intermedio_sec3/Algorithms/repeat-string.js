//"repeat()"
function repeatStrNumTimes(str, num) {
    
    return console.log(str.repeat(num));
  }
  
  repeatStringNumTimes("abc", 3);

//without "repeat()"
  function repeatStringNumTimes(str, num) {
    let res= "";
      if(num > 0){
        for (let i = 0; i < num; i++) {
            res+= str;
          }
          return res;
      }else{
        return res;
      }
  }
  
  console.log(repeatStringNumTimes("abc", 3));