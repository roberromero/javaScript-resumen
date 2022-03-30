function booWho(bool) {

    if(typeof bool=='boolean'){
        return true;
    }else{
      return false;
    }
  
  }
  
  booWho(null);


  //Pasada a ternaria

  const booWho = bool => {
    return typeof bool == 'boolean' ? true : false;
  }

