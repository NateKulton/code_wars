let uniqueInOrder = function(iterable) {
  let arr = arrayCheck(iterable);
  let uniqueArray = [];

    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] !== arr[index + 1]) {
        uniqueArray.push(arr[index]);
      }
    }
    return uniqueArray;
  }



  console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [ 1, 2, 3 ]
  console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']



  function arrayCheck(value) {
    if (typeof value === 'string') {
      return value.split('');
    } else {
      return value;
    }
  }
