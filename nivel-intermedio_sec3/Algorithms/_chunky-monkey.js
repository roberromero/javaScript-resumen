function chunkArrayInGroups(arr, size) {

    let newArr = [];
    for (let i= 0; i < arr.length; i+=size) {
        let fragment= arr.slice(i,i+size);
        newArr.push(fragment);
    }
    return newArr;
  }
  const arr= chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(arr);
