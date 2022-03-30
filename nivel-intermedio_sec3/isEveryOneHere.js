let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
//   2 formas para comprobar si existen esas propiedades
//   console.log(users.hasOwnProperty('Fran'));
//   console.log('Alan' in users);

  function isEveryoneHere(userObj) {
    const arr= ['Alan', 'Jeff', 'Sarah', 'Ryan'];
    let bol;
    for(let i = 0; i<4; i++){
        
        if(userObj.hasOwnProperty(arr[i]) != true){
            bol= false;
            break;
        }else{
            bol=true;
        }

    }
    return bol;
}

console.log(isEveryoneHere(users)); 