function filterList(arr) {
  let numArr = [];

    for (let index = 0; index < arr.length; index += 1) {
      if(Number.isInteger(arr[index])) {
        numArr.push(arr[index]);
      }
    }
    return numArr;
  }

  console.log(filterList([1,2,'a','b'])); // [1,2]
  console.log(filterList([1,'a','b',0,15])); // [ 1, 0, 15 ]
  console.log(filterList([1,2,'aasf','1','123',123])); // [1,2,123]
