function getName(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
     .then(data => {let name= data.name 
    document.getElementById("nombre").innerHTML= name});

    
    fetch('https://pokeapi.co/api/v2/pokemon/')
 .then(response=>response.json())
 .then(data=>data.results).then( obj=>{
     for (const key in obj) {
          // console.log(obj[key].name);
          return console.log(obj[key].url);
     }
 }).catch((err) => {
    console.log("Error encontrado:", err);
  });
 }
