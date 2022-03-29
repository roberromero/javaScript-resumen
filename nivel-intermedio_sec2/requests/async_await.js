let cookBeans = () => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('beans');
     }, 1000);
   });
  }
  
  let steamBroccoli = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('broccoli');
     }, 1000);
   });
  }
  
  let cookRice = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('rice');
     }, 1000);
   });
  }
  
  let bakeChicken = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('chicken');
     }, 1000);
   });
  }
  

  const serveDinner = async () => {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, 
    ${await starchPromise}, ${await proteinPromise}, 
    and ${await sidePromise}.`);
  }

  serveDinner();

  //Añadimos varias promesas con "promise.all"
  async function serveDinnerAgain(){
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
    
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
  }
  