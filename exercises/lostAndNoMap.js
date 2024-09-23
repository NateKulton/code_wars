function maps(arr){
let index = 0;
let newArr = [];

  while (index < arr.length) {
    newArr.push(arr[index] * 2);
    index += 1;
  }
  return newArr;
}

console.log(maps([1, 2, 3]));
