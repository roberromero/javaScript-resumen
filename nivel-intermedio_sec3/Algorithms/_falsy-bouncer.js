//false, null, 0, NaN, undefined, "" are falsy bounters

function bouncer(arr) {
    let arrNuevo= [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            arrNuevo.push(arr[i]);
        }
    }
    return arrNuevo;
}
  const arr= bouncer([false, undefined, "", 0, null, NaN ]);

  console.log(arr);
